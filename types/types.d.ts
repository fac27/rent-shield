import type { Json } from './supabase';
import type { Database } from './supabase';

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
  inputType: 'number' | 'date' | 'text' | 'textarea' | 'file' | 'checkbox';
  placeholder?: string; 
  pattern?: string;
}

export interface DateField extends BaseField {
  inputType: 'date';
  default: string;
}

export interface OptionField extends BaseField {
  inputType: 'select' | 'radio';
  options: string[];
}

type DatabaseListings = Database['public']['Tables']['property']['Insert'];

export type DatabaseListingsInsObj = Omit<
DatabaseListings,
| 'id'
| 'created_at'
| 'user_id'
| 'allocated_parking' // temp
| 'street_parking' // temp
| 'attributes' // temp
| 'county' // temp
| 'latitude' // temp
| 'longitude' // temp
| 'location' // temp
>;


export type FormFieldKeys = DatabaseListingsKeys | AdditionalFormFields;

export type AdditionalFormFields = 'floor_plans'
| 'property_video'
| 'property_images'
| 'epcCertificate'
| 'uploadedImagesOfEveryRoom'
| 'clearAndHighQualityImages'
| 'imagesOfInteriorAndExterior'
| 'newlyTakenImages'

export type FieldType = BaseField | OptionField | DateField;

export type FormFields = {
  // could fetch 'type_id': {},
  [key in FormFieldKeys]: FieldType;
};

// export type FormFieldsExcUserId = Omit<FormFields, 'user_id' >;