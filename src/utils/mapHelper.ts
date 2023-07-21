import { Loader } from '@googlemaps/js-api-loader';
import { ILocation } from '../../types';

export const initializeMap = async (center: ILocation) => {
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['maps', 'places'],
  });
  const mapOptions = {
    center: center,
    zoom: 16,
  };

  const googleMaps = await loader.importLibrary('maps');
  const map = new googleMaps.Map(
    document.getElementById('map') as HTMLElement,
    mapOptions,
  );
  return map;
};

export const initializeSearch = async () => {
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['maps', 'places'],
  });
  const autocompleteOptions = {
    types: ['geocode'],
    componentRestrictions: { country: ['GB'] },
    fields: ['place_id', 'geometry', 'name'],
  };
  const googlePlaces = await loader.importLibrary('places');

  const input = document.getElementById('autocomplete') as HTMLInputElement;
  const autocomplete = new googlePlaces.Autocomplete(
    input,
    autocompleteOptions,
  );

  return new Promise((resolve, reject) => {
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const center = {
        lat: place.geometry?.location?.lat(),
        lng: place.geometry?.location?.lng(),
      };
      if (place.geometry) {
        resolve(center);
      } else {
        reject(new Error('place does not exist'));
      }
    });
  });

  //insert error handing
};

// export const convertPostCode = async (postcode: string) => {
//   const loader = new Loader({
//     apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
//     version: 'weekly',
//     libraries: ['maps', 'places'],
//   });
//   const address = postcode;
//   const googleGeoCoder = await loader.importLibrary('geocoding');
//   const geocoder = new googleGeoCoder.Geocoder();

//   return new Promise((resolve, reject) => {
//     geocoder.geocode({ address: address }, (results, status) => {
//       if (status == google.maps.GeocoderStatus.OK) {
//         const location = {
//           lat: results[0].geometry.location.lat(),
//           lng: results[0].geometry.location.lng(),
//         };
//         console.log(location);
//         resolve(location);
//         // let latitude = results?[0].geometry?.location.lat()
//         // let longitude = results?[0].geometry?.location.lng()
//       } else {
//         console.log(Error);
//         reject('geocode was no good');
//       }
//     });
//   }).catch((error) => {
//     reject(error);
//   });
// };

export const convertAddress = async (address:string)=>{
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`)
  .then((response)=>{
    return response.json()
  }).then(jsonData =>{
    console.log('🔥',jsonData.results[0].geometry.location)
    return jsonData.results[0].geometry.location
  })
  .catch(error=>{
    console.log(error)
  })
}