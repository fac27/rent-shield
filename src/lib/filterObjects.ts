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
  includeFalsy: boolean;
}

const allFilters: { [key: string]: Filter } = {
  // location: {
  //   operation: FilterOperation.match,
  //   field: 'address2',
  //   args: [],
  //   includeFalsy: true,
  // },
  proximity: {
    operation: FilterOperation.geo_distance,
    field: 'lat_lon_point',
    args: [],
    includeFalsy: true,
  },
  cost: {
    operation: FilterOperation.range,
    field: 'rent',
    args: [],
    includeFalsy: true,
  },
  bills_included: {
    operation: FilterOperation.bool,
    field: 'bills_included',
    args: [],
    includeFalsy: true,
  },
  property_type: {
    operation: FilterOperation.match,
    field: 'property_type',
    args: [],
    includeFalsy: true,
  },
  rooms: {
    operation: FilterOperation.range,
    field: 'bedrooms',
    args: [],
    includeFalsy: true,
  },
  min_tenancy_months: {
    operation: FilterOperation.greater_than_or_equal,
    field: 'min_tenancy',
    args: [],
    includeFalsy: true,
  },
  pets_allowed: {
    operation: FilterOperation.bool,
    field: 'pets_allowed',
    args: [],
    includeFalsy: false,
  },
  smokers_allowed: {
    operation: FilterOperation.bool,
    field: 'smokers_welcome',
    args: [],
    includeFalsy: false,
  },
  bike_storage: {
    operation: FilterOperation.bool,
    field: 'bike_storage',
    args: [],
    includeFalsy: false,
  },
  garden: {
    operation: FilterOperation.bool,
    field: 'garden',
    args: [],
    includeFalsy: false,
  },
  fireplace: {
    operation: FilterOperation.bool,
    field: 'fireplace',
    args: [],
    includeFalsy: false,
  },
  elevator: {
    operation: FilterOperation.bool,
    field: 'elevator',
    args: [],
    includeFalsy: false,
  },
  electric_heating: {
    operation: FilterOperation.bool,
    field: 'electric_heating',
    args: [],
    includeFalsy: false,
  },
  gas_heating: {
    operation: FilterOperation.bool,
    field: 'gas_heating',
    args: [],
    includeFalsy: false,
  },
  visitor_parking: {
    operation: FilterOperation.bool,
    field: 'visitor_parking',
    args: [],
    includeFalsy: false,
  },
  allocated_parking: {
    operation: FilterOperation.bool,
    field: 'allocated_parking',
    args: [],
    includeFalsy: false,
  },
  street_parking: {
    operation: FilterOperation.bool,
    field: 'street_parking',
    args: [],
    includeFalsy: false,
  },
  wheelchair_accessible: {
    operation: FilterOperation.bool,
    field: 'wheelchair_accessible',
    args: [],
    includeFalsy: false,
  },
};

export { allFilters };
