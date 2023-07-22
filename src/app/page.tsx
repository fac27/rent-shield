import SearchBar from '@/components/SearchBar';
import Property from '../components/Property';
import Map from '../components/Map';
import { initializeSearch, initializeMap } from '@/utils/mapHelper';

export default function Home() {
  const center = initializeSearch();
  //added in some dummy data so pass down props to property component
  const propertyProps = {
    address: "113-115 Fonthill Rd, Finsbury Park, London N4 3HH",
    price: 1500,
    pets: false,
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SearchBar />
        <Property propertyProps={propertyProps}/>
      </main>
    </>
  );
}
