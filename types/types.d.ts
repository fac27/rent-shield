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
  filters: SearchPreferenceProps;
}

export interface SearchFormProps {
  preferences: {
    location: string;
    cost: {
      max: number;
      min: number;
    };
    property_details: {
      type: string[];
      rooms: number[];
      min_tenancy_months: number[];
    };
    features: string[];
  };
}

export interface SearchPreferenceProps {
  preferences: {
    location?: string;
    proximity?: {
      lat: number;
      lon: number;
      radius: number;
    };
    cost: {
      min: number;
      max: number;
    };
    bills_included: boolean;
    property_type: string[];
    rooms: {
      min_rooms: number;
      max_rooms: number;
    };
    min_tenancy_months?: number;
    features?: {
      pets_allowed?: boolean;
      smokers_allowed?: boolean;
      bike_storage?: boolean;
      garden?: boolean;
      fireplace?: boolean;
      elevator?: boolean;
      wheelchair_accessible?: boolean;
      electric_heating?: boolean;
      gas_heating?: boolean;
      visitor_parking?: boolean;
      allocated_parking?: boolean;
      street_parking?: boolean;
    };
  };
}

type InputType =
  | 'number'
  | 'radio'
  | 'select'
  | 'date'
  | 'text'
  | 'textarea'
  | 'file'
  | 'checkbox';

export interface BaseField {
  label: string;
  inputType: InputType;
  placeholder?: string;
  pattern?: string;
  options?: string[];
}

export type FieldType = BaseField | OptionField | FileField;

export type FormFieldKey = keyof typeof formFields;

export type FormFieldTypes = {
  [key in FormFieldKey]: FieldType;
};
