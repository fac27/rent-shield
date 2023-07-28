import { FormFieldTypes } from '../../types/types';

export const formFields: FormFieldTypes = {
  rent: {
    label: 'Monthly rent',
    inputType: 'number',
    placeholder: '£1000',
  },
  billsIncluded: {
    label: 'Bills included in monthly rent?',
    inputType: 'radio',
    options: ['Yes', 'No'],
  },
  petsAllowed: {
    label: 'Pets allowed?',
    inputType: 'radio',
    options: ['Yes', 'No'],
  },
  smokersAllowed: {
    label: 'Smokers allowed?',
    inputType: 'radio',
    options: ['Yes', 'No'],
  },
  depositAmount: {
    label: 'Deposit amount',
    inputType: 'number',
    placeholder: '£',
  },
  councilTaxBand: {
    label: 'Council Tax Band',
    inputType: 'select',
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  },
  energyRating: {
    label: 'Energy rating',
    inputType: 'select',
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  },
  availableFromDate: {
    label: 'Available from date',
    inputType: 'date',
  },

  flatOrHouseNumber: {
    label: 'Flat or House Number (kept private)',
    inputType: 'text',
    placeholder: 'Please enter the full first line of your address...',
  },
  addressLine2: {
    label: 'Address Line 2 (optional)',
    inputType: 'text',
    placeholder: 'Please enter the full second line of your address...',
  },
  addressLine3: {
    label: 'Address Line 3 (Optional)',
    inputType: 'text',
  },
  postCode: {
    label: 'Your Address - Post Code',
    inputType: 'text',
    pattern: '[A-Za-z]{3}',
  },
  town: {
    label: 'Town',
    inputType: 'text',
    placeholder: 'e.g. Manchester',
  },
  propertyType: {
    label: 'Property Type',
    inputType: 'select',
    options: [
      'Studio Flat (Single occupant)',
      'Bedsit (Single Occupant)',
      'Detached House',
      'Semi-Detached House',
      'Terraced House',
      'Bungalow',
      'End Terrace',
      'Flat',
      'Penthouse Flat',
      'Maisonette Flat',
      'Mobile Home',
      'House Boat',
    ],
  },
  floor: {
    label: 'Floor',
    inputType: 'select',
    options: ['Ground', 'First', '2+', 'Top Floor'],
  },
  numberOfBedrooms: {
    label: 'Number of Bedrooms',
    inputType: 'number',
  },
  numberOfBathrooms: {
    label: 'Number of Bathrooms',
    inputType: 'number',
  },
  furnishing: {
    label: 'Furnishing',
    inputType: 'select',
    options: [
      'Furnished',
      'Unfurnished',
      'Semi-Furnished',
      'Furnishing at choice of tenant',
    ],
  },
  parking: {
    label: 'Parking',
    inputType: 'select',
    options: ['Allocated parking', 'Street Parking', 'No parking'],
  },
  propertyDescription: {
    label: 'Property description',
    inputType: 'textarea',
  },
  propertyFeatures: {
    label: 'Property Features',
    inputType: 'checkbox',
    options: [
      'Bike Store',
      'Garden',
      'Fireplace',
      'Elevator in building',
      'Electric Heating',
      'Gas heating',
      'Visitor parking',
    ],
  },
  minimumTenancyTerm: {
    label: 'Mimimum tenancy term',
    inputType: 'text',
    placeholder: 'Example 6 months, or 1 year',
  },
  propertyImages: {
    label: 'Property Images',
    inputType: 'file',
  },
  propertyVideo: {
    label: 'Property video',
    inputType: 'file',
  },
  floorPlans: {
    label: 'Upload Floorplans',
    inputType: 'file',
  },
  epcCertificate: {
    label: 'Upload EPC certificate',
    inputType: 'file',
  },
  uploadedImagesOfEveryRoom: {
    label: 'Have you uploaded images of every room in the property?',
    inputType: 'radio',
    options: ['Yes', 'No'],
  },
  clearAndHighQualityImages: {
    label: 'Are the images clear and high quality?',
    inputType: 'radio',
    options: ['Yes', 'No'],
  },
  imagesOfInteriorAndExterior: {
    label:
      'Have you included images of both the interior and exterior of the property?',
    inputType: 'radio',
    options: ['Yes', 'No'],
  },
  newlyTakenImages: {
    label:
      'Are the images newly taken as part of the current property listing process?',
    inputType: 'radio',
    options: ['Yes', 'No'],
  }
};
