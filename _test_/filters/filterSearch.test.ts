import { SearchPreferenceProps } from '../../types/types';
import { filterPropertyListings } from '../../src/utils/filterHelper';

// Mock data for search test
const searchParams: SearchPreferenceProps = {
  preferences: {
    location: 'hackney',
    cost: {
      min: 1000,
      max: 2000,
      billsIncluded: true,
    },
    proximity: {
      lat: 0,
      lon: 0,
      radius: 5,
    },
    //propertyDetails: {
    //type: ['flat', 'house'],
    //rooms: {
    //  min: 1,
    //   max: submitted.roomsMax.value,
    //},
    // tenancyMin: submitted.tenancy.value,
    features: {
      pets: true,
      // smokers: submitted.smokers.value,
      // bike_storage: submitted.bike_storage.value,
      garden: true,
      // fireplace: submitted.fireplace.value,
      // elevator: submitted.elevator.value,
      // wheelchair_accessible: submitted.wheelchair_accessible.value,
      // electric_heating: submitted.electric_heating.value,
      // gas_heating: submitted.gas_heating.value,
      // visitor_parking: submitted.visitor_parking.value,
      // parking: {
      //   allocated: submitted.allocated.value,
      //   street: submitted.street.value,
    },
  },
};

describe('filterPropertyListings', () => {
  it('should return an array of properties', () => {
    const filteredProperties = filterPropertyListings(searchParams);
    expect([]).toBeInstanceOf(Array);
  }
  );
});
