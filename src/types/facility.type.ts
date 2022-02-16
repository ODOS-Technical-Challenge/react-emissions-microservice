export interface FacilityType {
  name: string;
  county: string;
  city: string;
  state: string;
  street: string;
  zipCode: string;
  latitude: number;
  longitude: number;

  chemicals: ChemicalType[];
}

export interface ChemicalType {
  name: string;
  mixtureName: string;
  elementalMetalIncluded: boolean;
  classification: string;
  unitOfMeasure: string;
  cleanAirInd: boolean;
  carcinogenInd: boolean;
  pfasInd: boolean;
  metalInd: boolean;
}
