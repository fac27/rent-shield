function getDistanceBetweenLocationPair(
    {
        latitude: lat1,
        longitude: lon1
    }: { latitude: number; longitude: number },
    {
        latitude: lat2,
        longitude: lon2
    }: { latitude: number; longitude: number
    }
)
{

// Convert from degrees to radians
lon1 =  lon1 * Math.PI / 180;
lon2 = lon2 * Math.PI / 180;
lat1 = lat1 * Math.PI / 180;
lat2 = lat2 * Math.PI / 180;

// Haversine formula
const dlon = lon2 - lon1;
const dlat = lat2 - lat1;
const a = Math.pow(Math.sin(dlat / 2), 2)
+ Math.cos(lat1) * Math.cos(lat2)
* Math.pow(Math.sin(dlon / 2),2);

const c = 2 * Math.asin(Math.sqrt(a));

// Radius of earth in km
const radius = 6371;

// calculate the result in km
return(c * radius);
}

export {getDistanceBetweenLocationPair}