import type { FormFields } from '../../types/types';
import supabase from 'lib/supabaseClient';

const getAllFrom = async (table: 'status' | 'type') => {
  const { data, error } = await supabase.from(table).select('description');
  // if error return default values (really it shouldnt get to that stage if cant connect to supabase throw global error.)
  return data ? data?.map((item) => item.description) : [];
};

export const formFields = async (): Promise<FormFields> => ({
  rent: {
    label: 'Monthly rent',
    inputType: 'number',
    placeholder: '£1000',
  },
  bills_included: {
    label: 'Bills included in monthly rent?',
    inputType: 'checkbox',
  },
  pets_allowed: {
    label: 'Pets allowed?',
    inputType: 'checkbox',
  },
  smokers_allowed: {
    label: 'Smokers allowed?',
    inputType: 'checkbox',
  },
  deposit_amount: {
    label: 'Deposit amount',
    inputType: 'number',
    placeholder: '£',
  },
  council_tax_band: {
    label: 'Council Tax Band',
    inputType: 'select',
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  },
  energy_rating: {
    label: 'Energy rating',
    inputType: 'select',
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  },
  available_from: {
    label: 'Available from date',
    inputType: 'date',
    default: new Date().toISOString().split('T')[0],
  },
  status_id: {
    label: 'Property Status',
    inputType: 'select',
    options: await getAllFrom('status'),
  },
  address1: {
    label: 'Flat or House Number (kept private)',
    inputType: 'text',
    placeholder: 'Please enter the full first line of your address...',
  },
  address2: {
    label: 'Address Line 2 (optional)',
    inputType: 'text',
    placeholder: 'Please enter the full second line of your address...',
  },
  postcode: {
    label: 'Your Address - Post Code',
    inputType: 'text',
    pattern: '[A-Za-z]{3}',
  },
  city: {
    label: 'City',
    inputType: 'text',
    placeholder: 'e.g. Manchester',
  },
  type_id: {
    label: 'Property Type',
    inputType: 'select',
    options: await getAllFrom('type'),
  },
  // floor: {
  //   label: 'Floor',
  //   inputType: 'select',
  //   options: ['Ground', 'First', '2+', 'Top Floor'],
  // },
  bedrooms: {
    label: 'Number of Bedrooms',
    inputType: 'number',
  },
  bathrooms: {
    label: 'Number of Bathrooms',
    inputType: 'number',
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
  description: { label: 'Property description', inputType: 'textarea' },
  bike_storage: { label: 'Bike storage?', inputType: 'checkbox' },
  garden: { label: 'Garden?', inputType: 'checkbox' },
  fireplace: { label: 'Fireplace?', inputType: 'checkbox' },
  elevator: { label: 'Bike storage?', inputType: 'checkbox' },
  electric_heating: { label: 'Electric heating?', inputType: 'checkbox' },
  gas_heating: { label: 'Gas heating?', inputType: 'checkbox' },
  visitor_parking: { label: 'Visitor Parking?', inputType: 'checkbox' },
  wheelchair_accessible: {
    label: 'Wheelchair Accessible?',
    inputType: 'checkbox',
  },
  min_tenancy: {
    label: 'Minimum tenancy term',
    inputType: 'text',
    placeholder: 'Example 6 months, or 1 year',
  },
  property_images: {
    label: 'Property Images',
    inputType: 'file',
  },
  property_video: {
    label: 'Property video',
    inputType: 'file',
  },
  floor_plans: {
    label: 'Upload Floor plans',
    inputType: 'file',
  },
  epcCertificate: {
    label: 'Upload EPC certificate',
    inputType: 'file',
  },
  uploadedImagesOfEveryRoom: {
    label: 'Have you uploaded images of every room in the property?',
    inputType: 'checkbox',
  },
  clearAndHighQualityImages: {
    label: 'Are the images clear and high quality?',
    inputType: 'checkbox',
  },
  imagesOfInteriorAndExterior: {
    label:
      'Have you included images of both the interior and exterior of the property?',
    inputType: 'checkbox',
  },
  newlyTakenImages: {
    label:
      'Are the images newly taken as part of the current property listing process?',
    inputType: 'checkbox',
  },
});
