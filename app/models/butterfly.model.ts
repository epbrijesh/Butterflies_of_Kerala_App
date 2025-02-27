export interface Butterfly {
  id: number;
  commonName: string;
  malayalamName: string;
  scientificName: string;
  family: string;
  sciName: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  mainPhoto: string;
  photos: Photo[];
  speciesLink: string;
  wikipediaLink: string;
  wingspan?: string;
  hostPlants?: HostPlant[];
}

export interface Photo {
  url: string;
  credit: string;
  sourceUrl: string;
}

export interface HostPlant {
  name: string;
  wikiLink?: string;
}