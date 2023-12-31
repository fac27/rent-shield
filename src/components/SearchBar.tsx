'use client'

import { useState, useEffect, FormEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { initializeSearch } from 'utils/mapHelper'
import { convertAddress } from 'utils/mapHelper'
import { ILocation } from '../../types/types'
import { Button } from 'flowbite-react'

const SearchBar = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  initializeSearch().catch(console.error)

  /**
   * Description
   * @param {React.FormEvent<HTMLFormElement>} e Form submit event
   * @returns {void} redirects to listings page with the lat + lng as query params.
   */
  const redirect = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value: any = e.nativeEvent?.target
    if (!value) return
    const address = value.area.value
    let { lat, lng } = await convertAddress(address)
    router.push('/listings?lat=' + lat + '&lng=' + lng)
  }

  return (
    <form onSubmit={redirect} className="w-8/12">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <Link
          href={{
            pathname: '/search-preferences',
            query: { location: inputValue },
          }}
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
          value={inputValue}
          name="area"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="text-white rounded-md text-sm px-2 py-1 absolute right-1.5 bottom-1.5 bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 "
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
