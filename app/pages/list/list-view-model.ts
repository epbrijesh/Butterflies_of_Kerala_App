import { Observable, Frame, Dialogs } from '@nativescript/core';
import { Butterfly } from '../../models/butterfly.model';
import { butterflies } from '../../data/butterflies';

export class ListViewModel extends Observable {
  private _butterflies: Butterfly[] = butterflies;
  private _filteredButterflies: Butterfly[] = [];
  private _searchQuery: string = '';
  private _sortType: string = 'default';
  private _selectedFamilies: Set<string> = new Set();

  constructor() {
    super();
    this._filteredButterflies = [...this._butterflies];
  }

  get filteredButterflies(): Butterfly[] {
    return this._filteredButterflies;
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  get sortType(): string {
    return this._sortType;
  }

  get hasActiveFilters(): boolean {
    return this._selectedFamilies.size > 0;
  }

  set searchQuery(value: string) {
    if (this._searchQuery !== value) {
      this._searchQuery = value;
      this.notifyPropertyChange('searchQuery', value);
      this.filterAndSortButterflies();
    }
  }

  showFamilyFilter() {
    // Get unique families from butterflies
    const families = [...new Set(this._butterflies.map(o => o.family))].sort();
    
    // Create actions array with checkmarks for selected families
    const actions = families.map(family => {
      const isSelected = this._selectedFamilies.has(family);
      return `${isSelected ? '✓ ' : ''}${family}`;
    });

    // Add Clear Filters option if there are active filters
    if (this._selectedFamilies.size > 0) {
      actions.unshift('Clear Filters');
    }

    Dialogs.action({
      title: "Filter by Family",
      message: "Select families to show:",
      cancelButtonText: "Cancel",
      actions: actions
    }).then(result => {
      if (result === 'Clear Filters') {
        this._selectedFamilies.clear();
      } else if (result !== 'Cancel') {
        // Remove checkmark if present
        const selectedFamily = result.replace('✓ ', '');
        
        if (this._selectedFamilies.has(selectedFamily)) {
          this._selectedFamilies.delete(selectedFamily);
        } else {
          this._selectedFamilies.add(selectedFamily);
        }
      }
      
      this.notifyPropertyChange('hasActiveFilters', this.hasActiveFilters);
      this.filterAndSortButterflies();
    });
  }

  onSearch() {
    this.filterAndSortButterflies();
  }

  onClear() {
    this.searchQuery = '';
  }

  sortByName() {
    this._sortType = 'name';
    this.notifyPropertyChange('sortType', this._sortType);
    this.filterAndSortButterflies();
  }

  sortByFamily() {
    this._sortType = 'family';
    this.notifyPropertyChange('sortType', this._sortType);
    this.filterAndSortButterflies();
  }

  sortByDefault() {
    this._sortType = 'default';
    this.notifyPropertyChange('sortType', this._sortType);
    this.filterAndSortButterflies();
  }

  onbutterflyTap(args) {
    const tappedItem = this._filteredButterflies[args.index];
    Frame.topmost().navigate({
      moduleName: "pages/detail/detail-page",
      context: tappedItem,
      clearHistory: false
    });
  }

  goBack() {
    Frame.topmost().goBack();
  }

  private filterAndSortButterflies() {
    const query = this._searchQuery.toLowerCase();
    let filtered = this._butterflies.filter(butterfly => 
      (butterfly.commonName.toLowerCase().includes(query) ||
       butterfly.malayalamName.toLowerCase().includes(query) ||
       butterfly.scientificName.toLowerCase().includes(query)) &&
      (this._selectedFamilies.size === 0 || this._selectedFamilies.has(butterfly.family))
    );

    switch (this._sortType) {
      case 'name':
        filtered.sort((a, b) => a.scientificName.localeCompare(b.scientificName));
        break;
      case 'family':
        filtered.sort((a, b) => a.family.localeCompare(b.family));
        break;
      default:
        filtered = filtered.sort((a, b) => a.id - b.id);
    }

    this._filteredButterflies = filtered;
    this.notifyPropertyChange('filteredButterflies', this._filteredButterflies);
  }
}