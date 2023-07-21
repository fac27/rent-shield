import Map from '../components/Map';
import { initializeSearch, initializeMap } from '@/utils/mapHelper';
import { convertAddress } from '@/utils/mapHelper';

export default function Home() {
  const center = initializeSearch();

  const address = "111 Wellington St, Ottawa, ON K1A 0A9, Canada";
  const working = convertAddress(address);
  console.log(working);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Map apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} /> */}
      <Map center={center} />
    </main>
  );
}
