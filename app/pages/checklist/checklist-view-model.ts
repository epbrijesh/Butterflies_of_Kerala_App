import { Observable, Frame, Dialogs } from '@nativescript/core';
import { Butterfly } from '../../models/butterfly.model';
import { butterflies } from '../../data/butterflies';
import { ChecklistService } from '../../services/checklist.service';
import { Checklist } from '../../models/checklist.model';
import { ClipboardService } from '../../services/clipboard.service';

export class ChecklistViewModel extends Observable {
  private checklistService: ChecklistService;
  private clipboardService: ClipboardService;
  private _checklistItems: any[] = [];
  private _activeChecklist: Checklist | null = null;
  private _activeChecklistName: string = "No Checklist Selected";

  constructor() {
    super();
    this.checklistService = ChecklistService.getInstance();
    this.clipboardService = ClipboardService.getInstance();
    this.loadActiveChecklist();
  }

  get checklistItems() {
    return this._checklistItems;
  }

  get activeChecklist() {
    return this._activeChecklist;
  }

  get activeChecklistName() {
    return this._activeChecklistName;
  }

  private loadActiveChecklist() {
    const activeChecklist = this.checklistService.getActiveChecklist();
    this._activeChecklist = activeChecklist;
    
    if (activeChecklist) {
      this._activeChecklistName = activeChecklist.name || "Unnamed Checklist";
      this.notifyPropertyChange('activeChecklistName', this._activeChecklistName);
      this.notifyPropertyChange('activeChecklist', this._activeChecklist);
      this.loadChecklistItems(activeChecklist);
    } else {
      this._checklistItems = [];
      this.notifyPropertyChange('checklistItems', this._checklistItems);
    }
  }

  private loadChecklistItems(checklist: Checklist) {
    this._checklistItems = checklist.species
      .map((speciesId, index) => {
        const butterfly = butterflies.find(o => o.id === speciesId);
        if (butterfly) {
          return {
            ...butterfly,
            serialNumber: index + 1
          };
        }
        return null;
      })
      .filter(item => item !== null);
    
    this.notifyPropertyChange('checklistItems', this._checklistItems);
  }

  onItemTap(args) {
    const tappedItem = this._checklistItems[args.index];
    Frame.topmost().navigate({
      moduleName: "pages/detail/detail-page",
      context: tappedItem,
      clearHistory: false
    });
  }

  createNewChecklist() {
    Dialogs.prompt({
      title: "New Checklist",
      message: "Enter checklist name:",
      okButtonText: "Next",
      cancelButtonText: "Cancel",
      defaultText: "My Checklist"
    }).then(nameResult => {
      if (nameResult.result) {
        Dialogs.prompt({
          title: "Location",
          message: "Enter location:",
          okButtonText: "Next",
          cancelButtonText: "Cancel",
          defaultText: ""
        }).then(placeResult => {
          if (placeResult.result) {
            const today = new Date().toISOString().split('T')[0];
            
            Dialogs.prompt({
              title: "Start Date",
              message: "Enter start date (YYYY-MM-DD):",
              okButtonText: "Next",
              cancelButtonText: "Cancel",
              defaultText: today
            }).then(startDateResult => {
              if (startDateResult.result) {
                Dialogs.prompt({
                  title: "End Date",
                  message: "Enter end date (YYYY-MM-DD):",
                  okButtonText: "Create",
                  cancelButtonText: "Cancel",
                  defaultText: today
                }).then(endDateResult => {
                  if (endDateResult.result) {
                    const id = this.checklistService.createChecklist({
                      name: nameResult.text.trim(),
                      place: placeResult.text.trim(),
                      startDate: startDateResult.text.trim(),
                      endDate: endDateResult.text.trim()
                    });
                    this.checklistService.setActiveChecklist(id);
                    this.loadActiveChecklist();
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  editChecklistDetails() {
    const activeChecklist = this.checklistService.getActiveChecklist();
    if (!activeChecklist) {
      Dialogs.alert({
        title: "No Checklist",
        message: "No checklist is currently selected.",
        okButtonText: "OK"
      });
      return;
    }

    Dialogs.prompt({
      title: "Edit Checklist",
      message: "Enter checklist name:",
      okButtonText: "Next",
      cancelButtonText: "Cancel",
      defaultText: activeChecklist.name
    }).then(nameResult => {
      if (nameResult.result) {
        Dialogs.prompt({
          title: "Location",
          message: "Enter location:",
          okButtonText: "Next",
          cancelButtonText: "Cancel",
          defaultText: activeChecklist.place
        }).then(placeResult => {
          if (placeResult.result) {
            Dialogs.prompt({
              title: "Start Date",
              message: "Enter start date (YYYY-MM-DD):",
              okButtonText: "Next",
              cancelButtonText: "Cancel",
              defaultText: activeChecklist.startDate
            }).then(startDateResult => {
              if (startDateResult.result) {
                Dialogs.prompt({
                  title: "End Date",
                  message: "Enter end date (YYYY-MM-DD):",
                  okButtonText: "Save",
                  cancelButtonText: "Cancel",
                  defaultText: activeChecklist.endDate
                }).then(endDateResult => {
                  if (endDateResult.result) {
                    this.checklistService.updateChecklist(activeChecklist.id, {
                      name: nameResult.text.trim(),
                      place: placeResult.text.trim(),
                      startDate: startDateResult.text.trim(),
                      endDate: endDateResult.text.trim()
                    });
                    this.loadActiveChecklist();
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  showChecklistPicker() {
    const checklists = this.checklistService.getChecklists();
    if (checklists.length === 0) {
      Dialogs.alert({
        title: "No Checklists",
        message: "No checklists available. Create a new checklist first.",
        okButtonText: "OK"
      });
      return;
    }

    const options = {
      title: "Select Checklist",
      message: "Choose a checklist to view:",
      cancelButtonText: "Cancel",
      actions: checklists.map(c => `${c.name} (${c.place})`)
    };

    Dialogs.action(options).then(result => {
      if (result !== "Cancel") {
        const selectedChecklist = checklists[options.actions.indexOf(result)];
        this.checklistService.setActiveChecklist(selectedChecklist.id);
        this.loadActiveChecklist();
      }
    });
  }

  deleteChecklist() {
    const activeChecklist = this.checklistService.getActiveChecklist();
    if (!activeChecklist) {
      Dialogs.alert({
        title: "No Checklist",
        message: "No checklist is currently selected.",
        okButtonText: "OK"
      });
      return;
    }

    Dialogs.confirm({
      title: "Delete Checklist",
      message: `Are you sure you want to delete the checklist "${activeChecklist.name}"? This action cannot be undone.`,
      okButtonText: "Delete",
      cancelButtonText: "Cancel"
    }).then(result => {
      if (result) {
        this.checklistService.deleteChecklist(activeChecklist.id);
        this.loadActiveChecklist();
      }
    });
  }

  exportChecklist() {
    const activeChecklist = this.checklistService.getActiveChecklist();
    if (!activeChecklist || activeChecklist.species.length === 0) {
      Dialogs.alert({
        title: "Empty Checklist",
        message: "This checklist is empty. Add some species first!",
        okButtonText: "OK"
      });
      return;
    }

    const formattedEntries = this._checklistItems
      .map(item => `${item.serialNumber}. ${item.scientificName} - ${item.malayalamName} (${item.commonName})`)
      .join('\n');

    const checklistText = `Butterfly Checklist:\n------------------------------\nName: ${activeChecklist.name}\nLocation: ${activeChecklist.place}\nDates: ${activeChecklist.startDate} to ${activeChecklist.endDate}\n\nSpecies:\n------------------------------\n${formattedEntries}\n----------------------\nGenerated from *Butterflies of Kerala App* by Brijesh Pookkottur.\nhttps://play.google.com/store/apps/details?id=com.thinkdigit.butterflies.kerala\n`;

    if (this.clipboardService.copyToClipboard(checklistText)) {
      Dialogs.alert({
        title: "Success",
        message: "Checklist has been copied to clipboard!\n\ \n\ചെക്ക്‌ലിസ്റ്റ് വിവരങ്ങള്‍ കോപ്പി ചെയ്തു. ഇനി എവിടേയും പേസ്റ്റ് ചെയ്യാം.",
        okButtonText: "OK"
      });
    } else {
      Dialogs.alert({
        title: "Error",
        message: "Failed to copy checklist to clipboard. Please try again.",
        okButtonText: "OK"
      });
    }
  }

  goBack() {
    Frame.topmost().goBack();
  }
}