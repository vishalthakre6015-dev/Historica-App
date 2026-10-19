export type Era = 
  | 'All Eras'
  | 'Bronze & Ancient (Pre-500 BCE)'
  | 'Classical Antiquity (500 BCE - 500 CE)'
  | 'Medieval & Golden Ages (500 - 1500 CE)'
  | 'Early Modern & Renaissance (1500 - 1850 CE)';

export type Region = 'All Regions' | 'Europe' | 'Middle East' | 'Asia' | 'Americas' | 'Africa';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  eraTag?: string;
}

export interface Artifact {
  name: string;
  estimatedDate: string;
  foundAt: string;
  currentHome: string;
  significance: string;
  material: string;
}

export interface ReconstructionData {
  ancientTitle: string;
  ancientDescription: string;
  modernTitle: string;
  modernDescription: string;
  keyChanges: string[];
}

export interface VisitorGuide {
  bestTimeToVisit: string;
  openingHours: string;
  admissionInsight: string;
  dressCodeAndEtiquette: string;
  mustSeeSightsOnSite: string[];
  travelTip: string;
  conservationRule: string;
  climateNote: string;
}

export interface AudioTour {
  title: string;
  duration: string;
  transcript: string;
  soundscapeType: 'roman_colosseum' | 'desert_canyon' | 'cloud_forest' | 'palace_fountains' | 'sacred_bells' | 'classical_athens';
}

export interface HistoricalSite {
  id: string;
  name: string;
  ancientName?: string;
  location: {
    city: string;
    country: string;
    region: 'Europe' | 'Middle East' | 'Asia' | 'Americas' | 'Africa';
    coordinates: { lat: number; lng: number };
  };
  eraCategory: Era;
  timePeriod: string;
  civilization: string;
  heritageStatus: string;
  heroImage: string;
  reconstructionImage?: string;
  reconstruction: ReconstructionData;
  tagline: string;
  summary: string;
  deepHistory: {
    originNarrative: string;
    architecturalMarvel: string;
    declineOrPreservation: string;
    culturalSignificance: string;
  };
  keyEventsTimeline: TimelineEvent[];
  excavatedArtifacts: Artifact[];
  visitorGuide: VisitorGuide;
  audioTour: AudioTour;
  architecturalThemes?: string[];
  wikipediaUrl?: string;
}

export interface RecommendedSite {
  site: HistoricalSite;
  similarityScore: number;
  primaryMatchReason: string;
  matchedAttributes: string[];
}
