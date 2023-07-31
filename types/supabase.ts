export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      favourite: {
        Row: {
          property_id: number
          user_id: string
        }
        Insert: {
          property_id: number
          user_id: string
        }
        Update: {
          property_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favourite_property_id_fkey"
            columns: ["property_id"]
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favourite_property_id_fkey"
            columns: ["property_id"]
            referencedRelation: "property_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favourite_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      image: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          property_id: number
          url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          property_id: number
          url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          property_id?: number
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "image_property_id_fkey"
            columns: ["property_id"]
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "image_property_id_fkey"
            columns: ["property_id"]
            referencedRelation: "property_view"
            referencedColumns: ["id"]
          }
        ]
      }
      property: {
        Row: {
          address1: string | null
          address2: string | null
          allocated_parking: boolean | null
          attributes: Json | null
          available_from: string | null
          bathrooms: number | null
          bedrooms: number | null
          bike_storage: boolean | null
          bills_included: boolean | null
          city: string | null
          council_tax_band: string | null
          county: string | null
          created_at: string | null
          deposit_amount: number | null
          description: string | null
          electric_heating: boolean | null
          elevator: boolean | null
          energy_rating: string | null
          fireplace: boolean | null
          garden: boolean | null
          gas_heating: boolean | null
          id: number
          latitude: number | null
          location: unknown | null
          longitude: number | null
          min_tenancy: number | null
          min_tenancy_term: string | null
          pets_allowed: boolean | null
          postcode: string | null
          rent: number | null
          smokers_allowed: boolean | null
          status_id: number | null
          street_parking: boolean | null
          type_id: number | null
          user_id: string
          visitor_parking: boolean | null
          wheelchair_accessible: boolean
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          allocated_parking?: boolean | null
          attributes?: Json | null
          available_from?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          bike_storage?: boolean | null
          bills_included?: boolean | null
          city?: string | null
          council_tax_band?: string | null
          county?: string | null
          created_at?: string | null
          deposit_amount?: number | null
          description?: string | null
          electric_heating?: boolean | null
          elevator?: boolean | null
          energy_rating?: string | null
          fireplace?: boolean | null
          garden?: boolean | null
          gas_heating?: boolean | null
          id?: number
          latitude?: number | null
          location?: unknown | null
          longitude?: number | null
          min_tenancy?: number | null
          min_tenancy_term?: string | null
          pets_allowed?: boolean | null
          postcode?: string | null
          rent?: number | null
          smokers_allowed?: boolean | null
          status_id?: number | null
          street_parking?: boolean | null
          type_id?: number | null
          user_id: string
          visitor_parking?: boolean | null
          wheelchair_accessible?: boolean
        }
        Update: {
          address1?: string | null
          address2?: string | null
          allocated_parking?: boolean | null
          attributes?: Json | null
          available_from?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          bike_storage?: boolean | null
          bills_included?: boolean | null
          city?: string | null
          council_tax_band?: string | null
          county?: string | null
          created_at?: string | null
          deposit_amount?: number | null
          description?: string | null
          electric_heating?: boolean | null
          elevator?: boolean | null
          energy_rating?: string | null
          fireplace?: boolean | null
          garden?: boolean | null
          gas_heating?: boolean | null
          id?: number
          latitude?: number | null
          location?: unknown | null
          longitude?: number | null
          min_tenancy?: number | null
          min_tenancy_term?: string | null
          pets_allowed?: boolean | null
          postcode?: string | null
          rent?: number | null
          smokers_allowed?: boolean | null
          status_id?: number | null
          street_parking?: boolean | null
          type_id?: number | null
          user_id?: string
          visitor_parking?: boolean | null
          wheelchair_accessible?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "property_status_id_fkey"
            columns: ["status_id"]
            referencedRelation: "status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_type_id_fkey"
            columns: ["type_id"]
            referencedRelation: "type"
            referencedColumns: ["id"]
          }
        ]
      }
      role: {
        Row: {
          description: string | null
          id: number
        }
        Insert: {
          description?: string | null
          id?: number
        }
        Update: {
          description?: string | null
          id?: number
        }
        Relationships: []
      }
      status: {
        Row: {
          description: string | null
          id: number
        }
        Insert: {
          description?: string | null
          id?: number
        }
        Update: {
          description?: string | null
          id?: number
        }
        Relationships: []
      }
      type: {
        Row: {
          description: string | null
          id: number
        }
        Insert: {
          description?: string | null
          id?: number
        }
        Update: {
          description?: string | null
          id?: number
        }
        Relationships: []
      }
      user: {
        Row: {
          address1: string | null
          address2: string | null
          city: string | null
          country: string | null
          county: string | null
          forename: string | null
          postcode: string | null
          role_id: number
          surname: string | null
          telephone: string | null
          user_id: string
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          country?: string | null
          county?: string | null
          forename?: string | null
          postcode?: string | null
          role_id: number
          surname?: string | null
          telephone?: string | null
          user_id: string
        }
        Update: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          country?: string | null
          county?: string | null
          forename?: string | null
          postcode?: string | null
          role_id?: number
          surname?: string | null
          telephone?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      property_view: {
        Row: {
          address1: string | null
          address2: string | null
          allocated_parking: boolean | null
          attributes: Json | null
          bathrooms: number | null
          bedrooms: number | null
          bike_storage: boolean | null
          bills_included: boolean | null
          city: string | null
          county: string | null
          electric_heating: boolean | null
          elevator: boolean | null
          fireplace: boolean | null
          garden: boolean | null
          gas_heating: boolean | null
          id: number | null
          location: unknown | null
          min_tenancy: number | null
          pets_allowed: boolean | null
          postcode: string | null
          property_description: string | null
          property_type: string | null
          rent: number | null
          smokers_welcome: boolean | null
          status: string | null
          street_parking: boolean | null
          user_id: string | null
          visitor_parking: boolean | null
          wheelchair_accessible: boolean | null
        }
        Relationships: []
      }
      rent_range: {
        Row: {
          max_rent: number | null
          min_rent: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_min_max_range: {
        Args: Record<PropertyKey, never>
        Returns: {
          min_rent: number
          max_rent: number
        }[]
      }
      get_min_max_rent: {
        Args: Record<PropertyKey, never>
        Returns: {
          min_rent: number
          max_rent: number
        }[]
      }
      properties_with_distance_from:
        | {
            Args: {
              lat: number
              long: number
            }
            Returns: Database["public"]["CompositeTypes"]["property_type_with_distance"][]
          }
        | {
            Args: {
              lat: number
              long: number
              radius_km: number
            }
            Returns: Database["public"]["CompositeTypes"]["property_type_with_distance"][]
          }
      properties_within_range: {
        Args: {
          lat: number
          long: number
          radius: number
        }
        Returns: Database["public"]["CompositeTypes"]["property_type_with_distance"][]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      property_type_with_distance: {
        id: number
        user_id: string
        postcode: string
        address1: string
        address2: string
        city: string
        county: string
        property_type: string
        bedrooms: number
        bathrooms: number
        property_description: string
        rent: number
        status: string
        attributes: Json
        location: unknown
        wheelchair_accessible: boolean
        pets_allowed: boolean
        garden: boolean
        elevator: boolean
        bills_included: boolean
        min_tenancy: number
        smokers_welcome: boolean
        bike_storage: boolean
        fireplace: boolean
        gas_heating: boolean
        electric_heating: boolean
        visitor_parking: boolean
        allocated_parking: boolean
        street_parking: boolean
        dist_km: number
      }
    }
  }
}
