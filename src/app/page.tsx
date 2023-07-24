import Property from '../components/Property';

export default function Home() {
  //added in some dummy data so pass down props to property component
  const propertyProps = {
    address: '113-115 Fonthill Rd, Finsbury Park, London N4 3HH',
    price: 1500,
    pets: false,
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Property propertyProps={propertyProps} />
    </main>
  );
}
