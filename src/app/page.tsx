import Map from '../components/Map';
import { initializeSearch, initializeMap } from '@/utils/mapHelper';

export default function Home() {
  const center = initializeSearch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Map center={center} />
    </main>
  );
}
