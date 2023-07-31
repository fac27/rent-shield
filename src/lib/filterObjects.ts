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
    bills_included: {
      operation: FilterOperation.bool,
      field: 'bills_included',
      args: [],
    },
    property_type: {
      operation: FilterOperation.match,
      field: 'property_type',
      args: [],
    },
    rooms: {
      operation: FilterOperation.range,
      field: 'bedrooms',
      args: [],
    },
    min_tenancy_months: {
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
    bike_storage: {
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
    electric_heating: {
      operation: FilterOperation.bool,
      field: 'electric_heating',
      args: [],
    },
    gas_heating: {
      operation: FilterOperation.bool,
      field: 'gas_heating',
      args: [],
    },
    visitor_parking: {
      operation: FilterOperation.bool,
      field: 'visitor_parking',
      args: [],
    },
    allocated_parking: {
      operation: FilterOperation.bool,
      field: 'allocated_parking',
      args: [],
    },
    street_parking: {
      operation: FilterOperation.bool,
      field: 'street_parking',
      args: [],
    },
  };

  export {allFilters, }
