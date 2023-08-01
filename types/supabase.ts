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
            foreignKeyName: 'favourite_property_id_fkey'
            columns: ['property_id']
            referencedRelation: 'property'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'favourite_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
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
            foreignKeyName: 'image_property_id_fkey'
            columns: ['property_id']
            referencedRelation: 'property'
            referencedColumns: ['id']
          },
        ]
      }
      property: {
        Row: {
          address1: string | null
          address2: string | null
          attributes: Json | null
          bathrooms: number | null
          bedrooms: number | null
          city: string | null
          county: string | null
          created_at: string | null
          description: string | null
          id: number
          latitude: string | null
          longitude: string | null
          postcode: string | null
          rent: number | null
          status_id: number | null
          type_id: number | null
          user_id: string
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          attributes?: Json | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          county?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          latitude?: string | null
          longitude?: string | null
          postcode?: string | null
          rent?: number | null
          status_id?: number | null
          type_id?: number | null
          user_id: string
        }
        Update: {
          address1?: string | null
          address2?: string | null
          attributes?: Json | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          county?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          latitude?: string | null
          longitude?: string | null
          postcode?: string | null
          rent?: number | null
          status_id?: number | null
          type_id?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'property_status_id_fkey'
            columns: ['status_id']
            referencedRelation: 'status'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'property_type_id_fkey'
            columns: ['type_id']
            referencedRelation: 'type'
            referencedColumns: ['id']
          },
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
          id: number
          postcode: string | null
          role_id: number
          telephone: string | null
          user_id: string
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          country?: string | null
          county?: string | null
          id?: number
          postcode?: string | null
          role_id: number
          telephone?: string | null
          user_id: string
        }
        Update: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          country?: string | null
          county?: string | null
          id?: number
          postcode?: string | null
          role_id?: number
          telephone?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_role_id_fkey'
            columns: ['role_id']
            referencedRelation: 'role'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'user_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
