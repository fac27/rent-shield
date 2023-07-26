import SearchBar from 'components/SearchBar';
import Link from 'next/link';
import { Card } from 'flowbite-react';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Link href={'/listings'}>View listings</Link>
      <div className="bg-slate-900 flex h-screen justify-center items-center w-full">
        <SearchBar/>
      </div>
    </main>
  );
}
