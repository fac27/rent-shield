import { Loader } from "@googlemaps/js-api-loader"

export const initializeMap = (center) => {
    const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["maps", "places"],
    });
    const mapOptions = {
        center: center,
        zoom: 4
      };
      loader
  .importLibrary('maps')
  .then(({Map}) => {
    new Map(document.getElementById("map") as HTMLElement, mapOptions);
  })
  .catch((e) => {
    // render loading or error component
  });
  
      }

//         const marker = new Marker({
//             position: {},
//             map: map,
//             title: "hello"
//         })
//         marker.setMap(map)

//         const googlePlaces = await loader.importLibrary('places').then((google)=>{
//             const input = document.getElementById("autocomplete") as HTMLInputElement
//             const autocomplete = new google.maps.places.Autocomplete(input)
//         })

// }




    
