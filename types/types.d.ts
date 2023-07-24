export interface ILocation {
  lat: number;
  lng: number;
}

interface IMapProps {
  center: ILocation;
  markers: ILocation[];
}
