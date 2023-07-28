import type { ILocation } from '../../types/types';

export function isWithin(
  origin: ILocation,
  location: ILocation,
  range: number,
) {
  const distance = getDistanceBetweenLocationPair(origin, location);
  return distance <= range;
}

function getDistanceBetweenLocationPair(
  { lat: lat1, lng: lng1 }: { lat: number; lng: number },
  { lat: lat2, lng: lng2 }: { lat: number; lng: number },
) {
  // Convert from degrees to radians
  lng1 = (lng1 * Math.PI) / 180;
  lng2 = (lng2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  // Haversine formula
  const dlon = lng2 - lng1;
  const dlat = lat2 - lat1;
  const a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  const c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in km
  const radius = 6371;

  // calculate the result in km
  return c * radius;
}
