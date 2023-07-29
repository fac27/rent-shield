import { SearchPreferenceProps } from '../../types/types';
import { filterPropertyListings } from '../../src/utils/filterHelper';
import {
  getAllProperties,
  getAllPropertiesJoinedData,
  getAllPropertiesJoinedDataInGeoRange,
} from '../../src/lib/models';

// Mock data for search test
const searchParams: SearchPreferenceProps = {
  preferences: {
    location: 'hackney',
    cost: {
      min: 1000,
      max: 2000,
    },
    billsIncluded: true,
    proximity: {
      lat: 0,
      lon: 0,
      radius: 5,
    },
    propertyType: ['flat', 'house'],
    rooms: {
      min: 1,
      max: 10,
    },
    tenancyMinMonths: 12,
    features: {
      pets: true,
      smokers: false,
      bikeStorage: false,
      garden: true,
      fireplace: false,
      elevator: false,
      wheelchairAccessible: true,
      electricHeating: false,
      gasHeating: false,
      visitorParking: false,
      allocatedParking: false,
      streetParking: false,
    },
  },
};

let listings: any[];

// beforeAll(async () => {
//   listings = await getAllProperties();
// });

// describe('filterPropertyListings', () => {
//   it('should return an array of properties', () => {
//     const filteredProperties = filterPropertyListings(searchParams, listings);
//     expect([]).toBeInstanceOf(Array);
//   });
// });

describe('get property_view results', () => {
  it('should return an array of properties', async () => {
    const properties = await getAllPropertiesJoinedData();
    expect(properties).toBeInstanceOf(Array);
  });
});

describe('get property_view results', () => {
  it('should return an array of properties', async () => {
    const properties = await getAllPropertiesJoinedDataInGeoRange();
    expect(properties).toBeInstanceOf(Array);
  });
});
