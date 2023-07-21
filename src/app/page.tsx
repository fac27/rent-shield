import Map from './components/Map'
export default function Home() {
  const center = {
    lat: 51.507351,
    lng: -0.127758,
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* <Map apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} /> */}
      <Map center={center} />
    </main>
  );
}
