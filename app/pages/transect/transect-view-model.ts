import { Observable, Frame, Dialogs } from '@nativescript/core';
import { TransectService } from '../../services/transect.service';
import { ClipboardService } from '../../services/clipboard.service';
import { butterflies } from '../../data/butterflies';
import { Transect, TransectEntry } from '../../models/transect.model';

export class TransectViewModel extends Observable {
  private transectService: TransectService;
  private clipboardService: ClipboardService;
  private _transectEntries = [];
  private _searchQuery = '';
  private _searchResults = [];
  private _showSearchResults = false;
  private _selectedSpecies = null;
  private _activeTransectDate = "No Transect Selected";
  private _activeTransectDuration = "";

  constructor() {
    super();
    this.transectService = TransectService.getInstance();
    this.clipboardService = ClipboardService.getInstance();
    this.loadActiveTransect();
  }

  get transectEntries() {
    return this._transectEntries;
  }

  get searchQuery() {
    return this._searchQuery;
  }

  get searchResults() {
    return this._searchResults;
  }

  get showSearchResults() {
    return this._showSearchResults;
  }

  get activeTransectDate() {
    return this._activeTransectDate;
  }

  get activeTransectDuration() {
    return this._activeTransectDuration;
  }

  get hasSearchResults() {
    return this._searchResults.length > 0;
  }

  set searchQuery(value: string) {
    if (this._searchQuery !== value) {
      this._searchQuery = value;
      this.notifyPropertyChange('searchQuery', value);
      this.updateSearchResults();
    }
  }

  private formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  private updateSearchResults() {
    if (!this._searchQuery.trim()) {
      this._searchResults = [];
      this._showSearchResults = false;
    } else {
      const lowerQuery = this._searchQuery.toLowerCase();
      this._searchResults = butterflies.filter(o => 
        o.scientificName.toLowerCase().includes(lowerQuery) ||
        o.commonName.toLowerCase().includes(lowerQuery) ||
        o.malayalamName.toLowerCase().includes(lowerQuery)
      );
      this._showSearchResults = true;
    }
    this.notifyPropertyChange('searchResults', this._searchResults);
    this.notifyPropertyChange('showSearchResults', this._showSearchResults);
    this.notifyPropertyChange('hasSearchResults', this.hasSearchResults);
  }

  private loadActiveTransect() {
    const activeTransect = this.transectService.getActiveTransect();
    if (activeTransect) {
      this._activeTransectDate = activeTransect.date;
      this._activeTransectDuration = activeTransect.duration;
      this.notifyPropertyChange('activeTransectDate', this._activeTransectDate);
      this.notifyPropertyChange('activeTransectDuration', this._activeTransectDuration);
      this.loadTransectEntries(activeTransect);
    } else {
      this._transectEntries = [];
      this.notifyPropertyChange('transectEntries', this._transectEntries);
    }
  }

  private loadTransectEntries(transect: Transect) {
    this._transectEntries = transect.entries.map((entry, index) => {
      const species = butterflies.find(o => o.id === entry.speciesId);
      return {
        id: entry.id,
        serialNumber: index + 1,
        time: entry.time,
        speciesName: species ? `${species.commonName} - ${species.scientificName} - ${species.malayalamName}` : 'Unknown Species',
        malayalamName: species ? species.malayalamName : '',
        count: entry.count
      };
    });
    this.notifyPropertyChange('transectEntries', this._transectEntries);
  }

  onSearch() {
    this.updateSearchResults();
  }

  onClear() {
    this.searchQuery = '';
    this._showSearchResults = false;
    this.notifyPropertyChange('showSearchResults', this._showSearchResults);
  }

  onSpeciesSelect(args) {
    const selectedSpecies = this._searchResults[args.index];
    this.addSpeciesWithCount(selectedSpecies);
    this._showSearchResults = false;
    this.notifyPropertyChange('showSearchResults', this._showSearchResults);
  }

  private addSpeciesWithCount(species) {
    const activeTransect = this.transectService.getActiveTransect();
    if (!activeTransect) {
      Dialogs.alert({
        title: "No Active Transect",
        message: "Please create or select a transect first.",
        okButtonText: "OK"
      });
      return;
    }

    const timeStr = this.formatTime(new Date());

    Dialogs.prompt({
      title: "Add Species",
      message: `Enter count for ${species.commonName} - ${species.scientificName} - ${species.malayalamName}:`,
      okButtonText: "Add",
      cancelButtonText: "Cancel",
      defaultText: "1",
      inputType: "number"
    }).then(result => {
      if (result.result) {
        const count = parseInt(result.text, 10);
        if (isNaN(count) || count < 1) {
          Dialogs.alert({
            title: "Invalid Count",
            message: "Please enter a valid number greater than 0.",
            okButtonText: "OK"
          });
          return;
        }

        this.transectService.addEntry(activeTransect.id, {
          time: timeStr,
          speciesId: species.id,
          count: count
        });

        this.searchQuery = '';
        this.loadActiveTransect();
      }
    });
  }

  showSpeciesSelector() {
    if (this._searchResults.length === 1) {
      this.addSpeciesWithCount(this._searchResults[0]);
    } else if (this._searchResults.length > 1) {
      const options = {
        title: "Select Species",
        message: "Choose a species to add:",
        cancelButtonText: "Cancel",
        actions: this._searchResults.map(s => `${s.commonName} - ${s.scientificName} - ${s.malayalamName}`)
      };

      Dialogs.action(options).then(result => {
        if (result !== "Cancel") {
          const selectedSpecies = this._searchResults[options.actions.indexOf(result)];
          this.addSpeciesWithCount(selectedSpecies);
        }
      });
    }
  }

  removeItemByNumber() {
    const activeTransect = this.transectService.getActiveTransect();
    if (!activeTransect || this._transectEntries.length === 0) {
      Dialogs.alert({
        title: "No Entries",
        message: "There are no entries to remove.",
        okButtonText: "OK"
      });
      return;
    }

    Dialogs.prompt({
      title: "Remove Item",
      message: `Enter the Sl. No. of the item to remove (1-${this._transectEntries.length}):`,
      okButtonText: "Remove",
      cancelButtonText: "Cancel",
      defaultText: "",
      inputType: "number"
    }).then(result => {
      if (result.result) {
        const slNumber = parseInt(result.text, 10);
        
        // Validate the serial number
        if (isNaN(slNumber) || slNumber < 1 || slNumber > this._transectEntries.length) {
          Dialogs.alert({
            title: "Invalid Number",
            message: `Please enter a valid number between 1 and ${this._transectEntries.length}.`,
            okButtonText: "OK"
          });
          return;
        }
        
        // Get the entry to remove
        const entryToRemove = this._transectEntries[slNumber - 1];
        
        Dialogs.confirm({
          title: "Confirm Removal",
          message: `Are you sure you want to remove item #${slNumber}: ${entryToRemove.speciesName}?`,
          okButtonText: "Yes",
          cancelButtonText: "No"
        }).then(confirmResult => {
          if (confirmResult) {
            this.transectService.removeEntry(activeTransect.id, entryToRemove.id);
            this.loadActiveTransect();
          }
        });
      }
    });
  }

  createNewTransect() {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];

    Dialogs.prompt({
      title: "New Transect",
      message: "Enter date (YYYY-MM-DD):",
      okButtonText: "Next",
      cancelButtonText: "Cancel",
      defaultText: dateStr
    }).then(dateResult => {
      if (dateResult.result) {
        Dialogs.action({
          title: "Select Duration",
          message: "Choose survey duration:",
          cancelButtonText: "Cancel",
          actions: ["1 hour", "2 hours", "3 hours"]
        }).then(durationResult => {
          if (durationResult !== "Cancel") {
            const id = this.transectService.createTransect({
              date: dateResult.text.trim(),
              duration: durationResult
            });
            this.transectService.setActiveTransect(id);
            this.loadActiveTransect();
          }
        });
      }
    });
  }

  editTransectDetails() {
    const activeTransect = this.transectService.getActiveTransect();
    if (!activeTransect) return;

    Dialogs.prompt({
      title: "Edit Transect",
      message: "Enter date (YYYY-MM-DD):",
      okButtonText: "Next",
      cancelButtonText: "Cancel",
      defaultText: activeTransect.date
    }).then(dateResult => {
      if (dateResult.result) {
        Dialogs.action({
          title: "Select Duration",
          message: "Choose survey duration:",
          cancelButtonText: "Cancel",
          actions: ["1 hour", "2 hours", "3 hours"]
        }).then(durationResult => {
          if (durationResult !== "Cancel") {
            this.transectService.updateTransect(activeTransect.id, {
              date: dateResult.text.trim(),
              duration: durationResult
            });
            this.loadActiveTransect();
          }
        });
      }
    });
  }

  showTransectPicker() {
    const transects = this.transectService.getTransects();
    if (transects.length === 0) {
      Dialogs.alert({
        title: "No Transects",
        message: "No transects available. Create a new transect first.",
        okButtonText: "OK"
      });
      return;
    }

    const options = {
      title: "Select Transect",
      message: "Choose a transect to view:",
      cancelButtonText: "Cancel",
      actions: transects.map(t => `${t.date} (${t.duration})`)
    };

    Dialogs.action(options).then(result => {
      if (result !== "Cancel") {
        const selectedTransect = transects[options.actions.indexOf(result)];
        this.transectService.setActiveTransect(selectedTransect.id);
        this.loadActiveTransect();
      }
    });
  }

  deleteTransect() {
    const activeTransect = this.transectService.getActiveTransect();
    if (!activeTransect) {
      Dialogs.alert({
        title: "No Transect",
        message: "No transect is currently selected.",
        okButtonText: "OK"
      });
      return;
    }

    Dialogs.confirm({
      title: "Delete Transect",
      message: `Are you sure you want to delete the transect from ${activeTransect.date}? This action cannot be undone.`,
      okButtonText: "Delete",
      cancelButtonText: "Cancel"
    }).then(result => {
      if (result) {
        this.transectService.deleteTransect(activeTransect.id);
        this.loadActiveTransect();
      }
    });
  }

  exportTransect() {
    const activeTransect = this.transectService.getActiveTransect();
    if (!activeTransect || this._transectEntries.length === 0) {
      Dialogs.alert({
        title: "Empty Transect",
        message: "This transect is empty. Add some entries first!",
        okButtonText: "OK"
      });
      return;
    }

    const formattedEntries = this._transectEntries
      .map(entry => `${entry.serialNumber}. ${entry.time} - ${entry.speciesName} (Count: ${entry.count})`)
      .join('\n');

    const transectText = `Butterfly Transect Record:\n------------------------------\nDate: ${activeTransect.date}\nDuration: ${activeTransect.duration}\n\nEntries:\n------------------------------\n${formattedEntries}\n----------------------\nGenerated from *Butterflies of Kerala App* by Brijesh Pookkottur.\nhttps://play.google.com/store/apps/details?id=com.thinkdigit.butterflies.kerala\n`;

    if (this.clipboardService.copyToClipboard(transectText)) {
      Dialogs.alert({
        title: "Success",
        message: "Transect record has been copied to clipboard!\n\ \n\ട്രാൻസെക്റ്റ് വിവരങ്ങള്‍ കോപ്പി ചെയ്തു. ഇനി എവിടേയും പേസ്റ്റ് ചെയ്യാം.",
        okButtonText: "OK"
      });
    } else {
      Dialogs.alert({
        title: "Error",
        message: "Failed to copy transect record to clipboard. Please try again.",
        okButtonText: "OK"
      });
    }
  }

  goBack() {
    Frame.topmost().goBack();
  }
}