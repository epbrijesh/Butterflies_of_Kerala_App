export interface TransectEntry {
  id: number;
  time: string;
  speciesId: number;
  count: number;
}

export interface Transect {
  id: string;
  date: string;
  duration: string;
  entries: TransectEntry[];
  createdAt: string;
  updatedAt: string;
}

export interface TransectMetadata {
  date: string;
  duration: string;
}