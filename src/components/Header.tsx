'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Dropdown, Navbar, Avatar } from 'flowbite-react'
import { RxHamburgerMenu } from 'react-icons/rx'
import HamburgerSidebar from './HamburgerSidebar'
import { useState } from 'react'

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <header>
      <Navbar fluid rounded>
        {showSidebar ? <HamburgerSidebar /> : null}
        <div className="flex gap-3 items-center">
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <RxHamburgerMenu className="invert scale-125 mx-2" />
          </button>
          <Navbar.Brand href="/" className="flex gap-3 items-center">
            {
              <Image
                width="30"
                height="30"
                alt="Rent-shield logo"
                className="h-6 sm:h-9"
                src="/rs-logo.svg"
              />
            }
            <span className="hidden whitespace-nowrap text-xl font-semibold dark:text-white md:block">
              rent shield
            </span>
          </Navbar.Brand>
        </div>
        <div className="flex ">
          <Dropdown
            inline
            theme={{ arrowIcon: 'ml-0 mb-0' }}
            label={
              <Avatar
                alt="User settings"
                img="/images/user-image.svg"
                className="scale-75 md:w-16 md:h-16 md:scale-100"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-lg">Gertrude Pickle</span>
              <span className="block truncate text-md font-medium">
                gertrude@pickle.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
            <Dropdown.Divider />
            <Link href="/log-in">
              <Dropdown.Item>Log In</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Link href="/sign-up">
              <Dropdown.Item>Sign Up</Dropdown.Item>
            </Link>
          </Dropdown>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
