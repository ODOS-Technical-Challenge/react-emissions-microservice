export interface FacilityType {
  name: string;
  county: string;
  city: string;
  state: string;
  street: string;
  zipCode: number;
  latitude: number;
  longitude: number;

  chemicals: ChemicalType[];
}

export interface ChemicalType {
  name: string;
  healthEffects: string;
  exposure?: string;
}
