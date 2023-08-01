import type { Json } from './supabase'
import type { Database } from './supabase'

export interface ILocation {
  lat: number
  lng: number
}

interface IMapProps {
  id: PropertyType.id
  center: ILocation
  markers: ILocation[]
}

export type ListingType = {
  address1: string | null
  address2: string | null
  attributes: Json | null
  bathrooms: number
  bedrooms: number
  city: string
  county: string
  created_at: string
  description: string
  id: number
  latitude: number
  longitude: number
  postcode: string
  rent: number
  status: Status
  type: Type
  user_id?: string
  image: Images
}

export type PropertyType = {
  id: number
  description: string
}

export type StatusType = {
  id: number
  description: string
}

export type RentRangeType = {
  min_rent: number
  max_rent: number
}

export type Role = {
  id: number
  description: string
}

export type Images = { id: number; url: string }[]
export type Status = { id: number; description: string }[]
export type Type = { id: number; description: string }[]

export interface ContainerProps {
  listings: ListingType[]
  filters?: SearchPreferenceProps
}

export interface SearchFormProps {
  preferences: {
    location: string
    cost: {
      max: number
      min: number
    }
    property_details: {
      type: string[]
      rooms: number[]
      min_tenancy_months: number[]
    }
    features: string[]
  }
}

export interface SearchPreferenceProps {
  preferences: {
    location?: string
    proximity?: {
      lat: number
      lon: number
      radius: number
    }
    cost: {
      min: number
      max: number
    }
    bills_included: boolean
    property_type: string[]
    rooms: {
      min_rooms: number
      max_rooms: number
    }
    min_tenancy_months?: number
    features?: {
      pets_allowed?: boolean
      smokers_allowed?: boolean
      bike_storage?: boolean
      garden?: boolean
      fireplace?: boolean
      elevator?: boolean
      wheelchair_accessible?: boolean
      electric_heating?: boolean
      gas_heating?: boolean
      visitor_parking?: boolean
      allocated_parking?: boolean
      street_parking?: boolean
    }
  }
}

export interface BaseField {
  label: string
  inputType: 'number' | 'text' | 'textarea' | 'file' | 'checkbox'
  required: boolean
  placeholder?: string
  pattern?: string
}

export interface DateField extends BaseField {
  inputType: 'date'
  default: string
}

export interface OptionField extends BaseField {
  inputType: 'select' | 'radio'
  options: string[]
}

type DatabaseListings = Database['public']['Tables']['property']['Insert']

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
>

export type FormFieldKeys = DatabaseListingsKeys | AdditionalFormFields

export type AdditionalFormFields =
  | 'floor_plans'
  | 'property_video'
  | 'property_images'
  | 'epcCertificate'
  | 'uploadedImagesOfEveryRoom'
  | 'clearAndHighQualityImages'
  | 'imagesOfInteriorAndExterior'
  | 'newlyTakenImages'

export type FieldType = BaseField | OptionField | DateField

export type FormFields = {
  [key in FormFieldKeys]: FieldType
}

// export type FormFieldsExcUserId = Omit<FormFields, 'user_id' >;
