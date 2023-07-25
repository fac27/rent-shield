import ListingsContainer from 'components/ListingsContainter';

import { exampleListings } from './listings/page';
//added in some dummy data so pass down props to property componens

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ListingsContainer listings={exampleListings} />
    </main>
  );
}
