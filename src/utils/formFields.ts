import type { FormFields } from '../../types/types'
import supabase from 'lib/supabaseClient'

/**
 * Description
 * @param {any} table:'status'|'type'
 * @returns {any}
 */
const getAllFrom = async (table: 'status' | 'type') => {
  const { data, error } = await supabase.from(table).select('description')
  // if error return default values (really it shouldnt get to that stage if cant connect to supabase throw global error.)
  return data ? data?.map((item) => item.description) : []
}

export const formFields = async (): Promise<FormFields> => ({
  rent: {
    label: 'Monthly rent',
    inputType: 'number',
    placeholder: '£1000',
    required: true,
  },
  bills_included: {
    label: 'Bills included in monthly rent?',
    inputType: 'checkbox',
    required: false,
  },
  pets_allowed: {
    label: 'Pets allowed?',
    inputType: 'checkbox',
    required: false,
  },
  smokers_allowed: {
    label: 'Smokers allowed?',
    inputType: 'checkbox',
    required: false,
  },
  deposit_amount: {
    label: 'Deposit amount',
    inputType: 'number',
    placeholder: '£',
    required: true,
  },
  council_tax_band: {
    label: 'Council Tax Band',
    inputType: 'select',
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    required: true,
  },
  energy_rating: {
    label: 'Energy rating',
    inputType: 'select',
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    required: true,
  },
  available_from: {
    label: 'Available from date',
    inputType: 'date',
    default: new Date().toISOString().split('T')[0],
    required: true,
  },
  status_id: {
    label: 'Property Status',
    inputType: 'select',
    options: await getAllFrom('status'),
    required: true,
  },
  address1: {
    label: 'Flat or House Number (kept private)',
    inputType: 'text',
    placeholder: 'Please enter the full first line of your address...',
    required: true,
  },
  address2: {
    label: 'Address Line 2 (optional)',
    inputType: 'text',
    placeholder: 'Please enter the full second line of your address...',
    required: false,
  },
  postcode: {
    label: 'Your Address - Post Code',
    inputType: 'text',
    pattern: '[A-Za-z]{3}',
    required: true,
  },
  city: {
    label: 'City',
    inputType: 'text',
    placeholder: 'e.g. Manchester',
    required: true,
  },
  type_id: {
    label: 'Property Type',
    inputType: 'select',
    options: await getAllFrom('type'),
    required: true,
  },
  // floor: {
  //   label: 'Floor',
  //   inputType: 'select',
  //   options: ['Ground', 'First', '2+', 'Top Floor'],
  // },
  bedrooms: {
    label: 'Number of Bedrooms',
    inputType: 'number',
    required: true,
  },
  bathrooms: {
    label: 'Number of Bathrooms',
    inputType: 'number',
    required: true,
  },
  // furnishing: {
  //   label: 'Furnishing',
  //   inputType: 'select',
  //   options: [
  //     'Furnished',
  //     'Unfurnished',
  //     'Semi-Furnished',
  //     'Furnishing at choice of tenant',
  //   ],
  // },
  // parking: {
  //   label: 'Parking',
  //   inputType: 'select',
  //   options: ['Allocated parking', 'Street Parking', 'No parking'],
  // },
  description: {
    label: 'Property description',
    inputType: 'textarea',
    required: false,
  },
  bike_storage: {
    label: 'Bike storage?',
    inputType: 'checkbox',
    required: false,
  },
  garden: { label: 'Garden?', inputType: 'checkbox', required: false },
  fireplace: { label: 'Fireplace?', inputType: 'checkbox', required: false },
  elevator: { label: 'Bike storage?', inputType: 'checkbox', required: false },
  electric_heating: {
    label: 'Electric heating?',
    inputType: 'checkbox',
    required: false,
  },
  gas_heating: {
    label: 'Gas heating?',
    inputType: 'checkbox',
    required: false,
  },
  visitor_parking: {
    label: 'Visitor Parking?',
    inputType: 'checkbox',
    required: false,
  },
  wheelchair_accessible: {
    label: 'Wheelchair Accessible?',
    inputType: 'checkbox',
    required: false,
  },
  min_tenancy: {
    label: 'Minimum tenancy term',
    inputType: 'text',
    placeholder: 'Example 6 months, or 1 year',
    required: true,
  },
  property_images: {
    label: 'Property Images',
    inputType: 'file',
    required: false,
  },
  property_video: {
    label: 'Property video',
    inputType: 'file',
    required: false,
  },
  floor_plans: {
    label: 'Upload Floor plans',
    inputType: 'file',
    required: false,
  },
  epcCertificate: {
    label: 'Upload EPC certificate',
    inputType: 'file',
    required: false,
  },
  uploadedImagesOfEveryRoom: {
    label: 'Have you uploaded images of every room in the property?',
    inputType: 'checkbox',
    required: true,
  },
  clearAndHighQualityImages: {
    label: 'Are the images clear and high quality?',
    inputType: 'checkbox',
    required: true,
  },
  imagesOfInteriorAndExterior: {
    label:
      'Have you included images of both the interior and exterior of the property?',
    inputType: 'checkbox',
    required: true,
  },
  newlyTakenImages: {
    label:
      'Are the images newly taken as part of the current property listing process?',
    inputType: 'checkbox',
    required: true,
  },
})
