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

export type PropertyType = {
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

export type Images = { id: number; url: string }[];
export type Status = { id: number; description: string }[];
export type Type = { id: number; description: string }[];

export interface ContainerProps {
  listings: PropertyType[];
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
