'use client';
import Image from 'next/image';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import SearchBar from './SearchBar';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiLogoApple } from 'react-icons/bi';
import HamburgerSidebar from './HamburgerSidebar';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header>
      <Navbar fluid rounded>
        {showSidebar ? <HamburgerSidebar /> : null}
        <div className="flex gap-3 items-center">
          <RxHamburgerMenu
            className="invert scale-125 mx-2"
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <Navbar.Brand href="/" className="flex gap-3 items-center">
            {<Image
              width="30"
              height="30"
              alt="Rent-shield logo"
              className="h-6 sm:h-9"
              src="/rs-logo.svg"
            /> }
            <span className="hidden whitespace-nowrap text-xl font-semibold dark:text-white md:block">
              rent shield
            </span>
          </Navbar.Brand>
        </div>
        <span className="w-6/12">{showSearch ? <SearchBar /> : null}</span>
        <div className="flex ">
          <button
          id='monocle'
            className="scale-100 md:scale-150 invert ml-2 md:mx-5 "
            onClick={() => setShowSearch(!showSearch)}
          >
            <AiOutlineSearch />
          </button>
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
          </Dropdown>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
