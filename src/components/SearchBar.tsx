'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { initializeSearch } from 'utils/mapHelper';
// import { ILocation } from '../../types/types';

const SearchBar = () => {
  // const [location, setLocation] = useState<string | ILocation>('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    initializeSearch()
      // .then((selected) => {
      //   setLocation(selected as ILocation);
      // })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <Link
          href="/searchpreferences"
          passHref={true}
          className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none pointer-events-auto"
        >
          <Image
            src="/settings.svg"
            alt="search"
            width={20}
            height={20}
            className="-mt-1"
          />
        </Link>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 pl-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Location..."
          required
        />
        <button
          type="submit"
          className="text-white rounded-md text-sm px-2 py-1 absolute right-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            router.push('/listings');
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
