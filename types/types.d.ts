import type { Json } from './supabase';

export interface ILocation {
  lat: number;
  lng: number;
}

interface IMapProps {
  id: PropertyType.id;
  center: ILocation;
  markers: ILocation[];
}

export type ListingType = {
  address1: string;
  address2: string | null;
  attributes: Json | null;
  bathrooms: number;
  bedrooms: number;
  city: string;
  county: string;
  created_at: string;
  description: string;
  id: number;
  latitude: number;
  longitude: number;
  postcode: string;
  rent: number;
  status: Status;
  type: Type;
  user_id?: string;
  image: Images;
};

export type PropertyType = {
  id: number;
  description: string;
};

export type StatusType = {
  id: number;
  description: string;
};

export type RentRangeType = {
  min_rent: number;
  max_rent: number;
};

export type Role = {
  id: number;
  description: string;
};

export type Images = { id: number; url: string }[];
export type Status = { id: number; description: string }[];
export type Type = { id: number; description: string }[];

export interface ContainerProps {
  listings: ListingType[];
}

export interface SearchFormProps {
  preferences: {
    location: string;
    cost: {
      max: number;
      min: number;
    };
    propertyDetails: {
      type: string[];
      rooms: number[];
      tenancyMin: string[];
    };
    features: string[];
    parking: string[];
  };
}
export interface SearchPreferenceProps {
  preferences: {
    location: string;
    cost: {
      max: number;
      min: number;
      billsIncluded: boolean;
    };
    propertyDetails: {
      type: string;
      rooms: {
        min: number;
        max: number;
      };
      tenancyMin: string;
    };
    features: {
      pets: boolean;
      smokers: boolean;
      bikeStorage: boolean;
      garden: boolean;
      fireplace: boolean;
      elevator: boolean;
      electric_heating: boolean;
      gas_heating: boolean;
      visitor_parking: boolean;
      parking: {
        allocated: boolean;
        street: boolean;
      };
    };
  };
}

export interface SearchFormProps {
  preferences: {
    location: string;
    cost: {
      max: number;
      min: number;
    };
    propertyDetails: {
      type: string[];
      rooms: number[];
      tenancyMin: string[];
    };
    features: string[];
    parking: string[];
  };
}
export interface SearchPreferenceProps {
  preferences: {
    location: string;
    cost: {
      max: number;
      min: number;
      billsIncluded: boolean;
    };
    propertyDetails: {
      type: string;
      rooms: {
        min: number;
        max: number;
      };
      tenancyMin: string;
    };
    features: {
      pets: boolean;
      smokers: boolean;
      bikeStorage: boolean;
      garden: boolean;
      fireplace: boolean;
      elevator: boolean;
      electric_heating: boolean;
      gas_heating: boolean;
      visitor_parking: boolean;
      parking: {
        allocated: boolean;
        street: boolean;
      };
    };
  };
}

export interface BaseField {
  label: string;
  inputType: 'number' | 'date' | 'text' | 'textarea' | 'file';
  placeholder?: string;
  pattern?: string;
}

export interface OptionField extends BaseField {
  inputType: 'select' | 'radio' | 'checkbox';
  options: string[];
}

export type FormFieldKeys =
  | 'propertyType'
  | 'rent'
  | 'availableFromDate'
  | 'bills_included'
  | 'depositAmount'
  | 'councilTaxBand'
  | 'bedrooms'
  | 'bathrooms'
  | 'energyRating'
  | 'minimumTenancyTerm'
  | 'epcCertificate'
  | 'flatOrHouseNumber' //why
  | 'addressLine2' //why
  | 'addressLine3' //why
  | 'postCode' //why
  | 'town' // why
  | 'smokersAllowed' //attr?
  | 'petsAllowed' //attr?
  | 'furnishing' //attr?
  | 'parking' //attr?
  | 'floor' //attr?
  | 'features' //rename to attributes?
  | 'description'
  | 'floorPlans'
  | 'propertyVideo'
  | 'propertyImages'
  | 'uploadedImagesOfEveryRoom' //why
  | 'imagesOfInteriorAndExterior' //why
  | 'clearAndHighQualityImages' //why
  | 'newlyTakenImages'; //why;

export type FieldType = BaseField | OptionField;

export type FormFieldTypes = {
  [key in FormFieldKeys]: FieldType;
};
