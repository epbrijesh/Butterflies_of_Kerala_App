export interface Checklist {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  place: string;
  notes?: string;
  species: number[];
  createdAt: string;
  updatedAt: string;
}

export interface ChecklistMetadata {
  name: string;
  startDate: string;
  endDate: string;
  place: string;
  notes?: string;
}