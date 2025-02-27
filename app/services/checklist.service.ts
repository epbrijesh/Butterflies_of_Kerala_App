import { Observable, ApplicationSettings } from '@nativescript/core';
import { Checklist, ChecklistMetadata } from '../models/checklist.model';

export class ChecklistService extends Observable {
  private static instance: ChecklistService;
  private _checklists: Map<string, Checklist> = new Map();
  private readonly STORAGE_KEY = 'myChecklists';
  private _activeChecklistId: string | null = null;

  private constructor() {
    super();
    this.loadChecklists();
    this._activeChecklistId = ApplicationSettings.getString('activeChecklistId', null);
  }

  static getInstance(): ChecklistService {
    if (!ChecklistService.instance) {
      ChecklistService.instance = new ChecklistService();
    }
    return ChecklistService.instance;
  }

  private loadChecklists() {
    const savedChecklists = ApplicationSettings.getString(this.STORAGE_KEY);
    if (savedChecklists) {
      const checklistArray = JSON.parse(savedChecklists);
      this._checklists = new Map(checklistArray.map(list => [list.id, list]));
    }
  }

  private saveChecklists() {
    const checklistArray = Array.from(this._checklists.values());
    ApplicationSettings.setString(this.STORAGE_KEY, JSON.stringify(checklistArray));
  }

  createChecklist(metadata: ChecklistMetadata): string {
    const id = `checklist_${Date.now()}`;
    const checklist: Checklist = {
      id,
      ...metadata,
      species: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this._checklists.set(id, checklist);
    this.saveChecklists();
    
    if (!this._activeChecklistId) {
      this.setActiveChecklist(id);
    }
    
    return id;
  }

  deleteChecklist(id: string): boolean {
    const deleted = this._checklists.delete(id);
    if (deleted) {
      this.saveChecklists();
      if (this._activeChecklistId === id) {
        const nextChecklist = Array.from(this._checklists.values())[0];
        this.setActiveChecklist(nextChecklist?.id || null);
      }
    }
    return deleted;
  }

  updateChecklist(id: string, metadata: Partial<ChecklistMetadata>) {
    const checklist = this._checklists.get(id);
    if (checklist) {
      Object.assign(checklist, metadata, { updatedAt: new Date().toISOString() });
      this.saveChecklists();
      this.notifyPropertyChange('checklists', this.getChecklists());
      return true;
    }
    return false;
  }

  setActiveChecklist(id: string | null) {
    this._activeChecklistId = id;
    ApplicationSettings.setString('activeChecklistId', id);
    this.notifyPropertyChange('activeChecklistId', id);
  }

  getActiveChecklist(): Checklist | null {
    return this._activeChecklistId ? this._checklists.get(this._activeChecklistId) : null;
  }

  addToChecklist(butterflyId: number) {
    const checklist = this.getActiveChecklist();
    if (checklist && !checklist.species.includes(butterflyId)) {
      checklist.species.push(butterflyId);
      checklist.updatedAt = new Date().toISOString();
      this.saveChecklists();
      this.notifyPropertyChange('activeChecklist', checklist);
    }
  }

  removeFromChecklist(butterflyId: number) {
    const checklist = this.getActiveChecklist();
    if (checklist) {
      checklist.species = checklist.species.filter(id => id !== butterflyId);
      checklist.updatedAt = new Date().toISOString();
      this.saveChecklists();
      this.notifyPropertyChange('activeChecklist', checklist);
    }
  }

  isInChecklist(butterflyId: number): boolean {
    const checklist = this.getActiveChecklist();
    return checklist ? checklist.species.includes(butterflyId) : false;
  }

  getChecklists(): Checklist[] {
    return Array.from(this._checklists.values())
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }
}