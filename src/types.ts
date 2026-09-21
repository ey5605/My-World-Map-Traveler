export type Continent =
  | 'אירופה'
  | 'אסיה'
  | 'צפון אמריקה'
  | 'דרום אמריקה'
  | 'אפריקה'
  | 'אוקיאניה'
  | 'אנטארקטיקה';

export interface Country {
  id: string; // ISO numeric or unique id
  nameEn: string;
  nameHe: string;
  code2: string;
  code3: string;
  continent: Continent;
  flag: string;
  hasSubdivisions?: boolean;
}

export interface Subdivision {
  id: string; // e.g. "US-02", "US-15", "CAN-633"
  countryId: string;
  code: string;
  nameEn: string;
  nameHe: string;
  regionGroup: string;
  regionGroupNameHe: string;
  icon?: string;
}

export interface RegionGroup {
  id: string;
  countryId: string;
  nameEn: string;
  nameHe: string;
  icon: string;
  subdivisionIds: string[];
}

export interface VisitedStorageData {
  visitedCountryIds: string[];
  visitedSubdivisionIds: string[];
  visitedDates?: Record<string, string>; // optional date or note
  notes?: Record<string, string>;
  highlightColor: string;
  oceanColor?: string;
  projection: 'naturalEarth' | 'mercator';
  version: number;
}

export interface HighlightColorTheme {
  id: string;
  nameHe: string;
  nameEn: string;
  hex: string;
  glow: string;
  borderHex: string;
}

export interface OceanColorTheme {
  id: string;
  nameHe: string;
  nameEn: string;
  hex: string;
  borderPreview: string;
  isLight: boolean;
  landFill: string;
  landStroke: string;
  landHoverFill: string;
  landHoverStroke: string;
  graticuleColor: string;
  graticuleOpacity: number;
}
