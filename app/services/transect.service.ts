import { Observable, ApplicationSettings } from '@nativescript/core';
import { Transect, TransectMetadata, TransectEntry } from '../models/transect.model';

export class TransectService extends Observable {
  private static instance: TransectService;
  private _transects: Map<string, Transect> = new Map();
  private readonly STORAGE_KEY = 'myTransects';
  private _activeTransectId: string | null = null;

  private constructor() {
    super();
    this.loadTransects();
    this._activeTransectId = ApplicationSettings.getString('activeTransectId', null);
  }

  static getInstance(): TransectService {
    if (!TransectService.instance) {
      TransectService.instance = new TransectService();
    }
    return TransectService.instance;
  }

  private loadTransects() {
    const savedTransects = ApplicationSettings.getString(this.STORAGE_KEY);
    if (savedTransects) {
      const transectArray = JSON.parse(savedTransects);
      this._transects = new Map(transectArray.map(list => [list.id, list]));
    }
  }

  private saveTransects() {
    const transectArray = Array.from(this._transects.values());
    ApplicationSettings.setString(this.STORAGE_KEY, JSON.stringify(transectArray));
  }

  createTransect(metadata: TransectMetadata): string {
    const id = `transect_${Date.now()}`;
    const transect: Transect = {
      id,
      ...metadata,
      entries: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this._transects.set(id, transect);
    this.saveTransects();
    
    if (!this._activeTransectId) {
      this.setActiveTransect(id);
    }
    
    return id;
  }

  deleteTransect(id: string): boolean {
    const deleted = this._transects.delete(id);
    if (deleted) {
      this.saveTransects();
      if (this._activeTransectId === id) {
        const nextTransect = Array.from(this._transects.values())[0];
        this.setActiveTransect(nextTransect?.id || null);
      }
    }
    return deleted;
  }

  updateTransect(id: string, metadata: Partial<TransectMetadata>) {
    const transect = this._transects.get(id);
    if (transect) {
      Object.assign(transect, metadata, { updatedAt: new Date().toISOString() });
      this.saveTransects();
      return true;
    }
    return false;
  }

  addEntry(transectId: string, entry: Omit<TransectEntry, 'id'>): boolean {
    const transect = this._transects.get(transectId);
    if (transect) {
      const newEntry: TransectEntry = {
        id: Date.now(),
        ...entry
      };
      transect.entries.push(newEntry);
      transect.updatedAt = new Date().toISOString();
      this.saveTransects();
      return true;
    }
    return false;
  }

  removeEntry(transectId: string, entryId: number): boolean {
    const transect = this._transects.get(transectId);
    if (transect) {
      const initialLength = transect.entries.length;
      transect.entries = transect.entries.filter(entry => entry.id !== entryId);
      if (transect.entries.length !== initialLength) {
        transect.updatedAt = new Date().toISOString();
        this.saveTransects();
        return true;
      }
    }
    return false;
  }

  setActiveTransect(id: string | null) {
    this._activeTransectId = id;
    ApplicationSettings.setString('activeTransectId', id);
    this.notifyPropertyChange('activeTransectId', id);
  }

  getActiveTransect(): Transect | null {
    return this._activeTransectId ? this._transects.get(this._activeTransectId) : null;
  }

  getTransects(): Transect[] {
    return Array.from(this._transects.values())
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }
}