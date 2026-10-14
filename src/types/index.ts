export type Domain = 'teatro' | 'cinema' | 'ibrido';

export type Category = 'autore' | 'concetto' | 'periodo' | 'geografia' | 'movimento';

export type EraKey = 
  | 'antichita_barocco'
  | 'nascita_regia'
  | 'avanguardie_muto'
  | 'classicismo_realismo'
  | 'modernita_onde'
  | 'contemporaneo';

export interface KeyWork {
  title: string;
  year: number;
  note: string;
  type?: 'spettacolo' | 'film' | 'trattato' | 'manifesto';
}

export interface Quote {
  text: string;
  author: string;
  source?: string;
}

export interface IconographicAnalysis {
  title: string;
  diagramType: 'stage_layout' | 'framing_lens' | 'lighting_scheme' | 'acting_dynamic' | 'editing_flow' | 'proscenium_grid' | 'camera_movement';
  subtitle: string;
  explanation: string;
  visualElements: {
    label: string;
    description: string;
    icon?: string;
  }[];
  comparativeNote?: string;
}

export interface ConnectedNodeRef {
  targetId: string;
  relation: string;
}

export interface SceneNode {
  id: string;
  label: string;
  subtitle: string;
  category: Category;
  domain: Domain;
  era: EraKey;
  yearStart: number;
  yearEnd?: number;
  yearLabel: string;
  location: string;
  countryCode?: string;
  regionId?: string;
  shortDescription: string;
  fullEssay: string[];
  keyWorks: KeyWork[];
  famousQuote?: Quote;
  iconographicDetail: IconographicAnalysis;
  connections: ConnectedNodeRef[];
  x: number;
  y: number;
}

export interface NodeLink {
  source: string;
  target: string;
  relation: string;
  type: 'filiation' | 'direct_influence' | 'theatre_to_cinema' | 'opposition_rupture' | 'geographic_anchor';
}

export interface EraDefinition {
  key: EraKey;
  label: string;
  timeframe: string;
  startYear: number;
  endYear: number;
  summary: string;
  color: string;
}

export interface GeographicRegion {
  id: string;
  name: string;
  flagName: string;
  continent: string;
  theatreLegacy: string;
  cinemaLegacy: string;
  keyInnovations: string[];
  prominentCentres: string[];
  nodeIds: string[];
}

export interface AnatomyPlate {
  id: string;
  pillarNumber: string;
  title: string;
  theatreConcept: string;
  cinemaConcept: string;
  synthesis: string;
  theatrePoints: string[];
  cinemaPoints: string[];
  historicalTurningPoint: string;
  diagramVariant: 'proscenium_vs_aspect' | 'light_sculpture' | 'acting_scale' | 'camera_movement' | 'time_duration' | 'offscreen_space';
}

export type ViewMode = 'network' | 'timeline' | 'atlas' | 'anatomy' | 'glossary';
