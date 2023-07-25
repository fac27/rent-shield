export interface ILocation {
  lat: number;
  lng: number;
}

interface IMapProps {
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
  latitude: string;
  longitude: string;
  postcode: string;
  rent: number;
  status_id: number;
  type_id: number;
  user_id: string;
  images: string[];
  favourited: boolean;
};

export interface ContainerProps {
  listings: PropertyType[];
}