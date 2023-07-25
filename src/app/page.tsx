import ListingsContainer from 'components/ListingsContainter';
import { getAllProperties } from 'lib/models';

export default async function Home() {
  const listings = await getAllProperties()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ListingsContainer listings={listings}/>
    </main>
  );
}
