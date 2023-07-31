export enum FilterOperation {
    'bool',
    'range',
    'match',
    'greater_than_or_equal',
    'geo_distance',
  }

export interface Filter {
    operation: FilterOperation;
    field: string;
    args: any[];
  }

const allFilters: { [key: string]: Filter } = {
    location: {
      operation: FilterOperation.match,
      field: 'address2',
      args: [],
    },
    proximity: {
      operation: FilterOperation.geo_distance,
      field: 'lat_lon_point',
      args: [],
    },
    cost: {
      operation: FilterOperation.range,
      field: 'rent',
      args: [],
    },
    billsIncluded: {
      operation: FilterOperation.bool,
      field: 'bills_included',
      args: [],
    },
    propertyType: {
      operation: FilterOperation.match,
      field: 'property_type',
      args: [],
    },
    rooms: {
      operation: FilterOperation.range,
      field: 'bedrooms',
      args: [],
    },
    tenancyMinMonths: {
      operation: FilterOperation.greater_than_or_equal,
      field: 'min_tenancy',
      args: [],
    },
    pets: {
      operation: FilterOperation.bool,
      field: 'pets_allowed',
      args: [],
    },
    smokers: {
      operation: FilterOperation.bool,
      field: 'smokers_welcome',
      args: [],
    },
    bikeStorage: {
      operation: FilterOperation.bool,
      field: 'bike_storage',
      args: [],
    },
    garden: {
      operation: FilterOperation.bool,
      field: 'garden',
      args: [],
    },
    fireplace: {
      operation: FilterOperation.bool,
      field: 'fireplace',
      args: [],
    },
    elevator: {
      operation: FilterOperation.bool,
      field: 'elevator',
      args: [],
    },
    electricHeating: {
      operation: FilterOperation.bool,
      field: 'electric_heating',
      args: [],
    },
    gasHeating: {
      operation: FilterOperation.bool,
      field: 'gas_heating',
      args: [],
    },
    visitorParking: {
      operation: FilterOperation.bool,
      field: 'visitor_parking',
      args: [],
    },
    allocatedParking: {
      operation: FilterOperation.bool,
      field: 'allocated_parking',
      args: [],
    },
    streetParking: {
      operation: FilterOperation.bool,
      field: 'street_parking',
      args: [],
    },
  };

  export {allFilters, }
