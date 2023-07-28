import { SearchPreferenceProps } from '../../types/types';

export const makeIntoQuery = (data: { [key: string]: any }) => {
  return Object.keys(data)
    .map((key) => {
      let value = data[key];
      if (value !== null && typeof value === 'object')
        value = makeIntoQuery(value);
      return `${key}=${value}`;
    })
    .join('&');
};

export const makeIntoProps = (submitted: any): SearchPreferenceProps => {
  return {
    preferences: {
      location: submitted.location.value,
      cost: {
        max: submitted.cost.value,
        billsIncluded: submitted.bills.checked,
      },
      propertyDetails: {
        type: submitted.type.value,
        rooms: {
          min: submitted.roomsMin.value,
          max: submitted.roomsMax.value,
        },
        tenancyMin: submitted.tenancy.value,
      },
      features: {
        pets: submitted.pets_allowed.checked,
        smokers: submitted.smokers_allowed.checked,
        bike_storage: submitted.bike_storage.checked,
        garden: submitted.garden.checked,
        fireplace: submitted.fireplace.checked,
        elevator: submitted.elevator.checked,
        wheelchair_accessible: submitted.wheelchair_accessible.checked,
        electric_heating: submitted.electric_heating.checked,
        gas_heating: submitted.gas_heating.checked,
        visitor_parking: submitted.visitor_parking.checked,
        parking: {
          allocated: submitted.allocated.checked,
          exterior_parking: submitted.exterior_parking.checked,
        },
      },
    },
  };
};
