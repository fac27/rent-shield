'use client';

import Image from 'next/image';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header>
      <Navbar fluid rounded>
        <div className="flex gap-3">
          <Navbar.Brand href="/">
            <Image
              width="30"
              height="30"
              alt="Rent-shield logo"
              className="h-6 sm:h-9"
              src="/favicon.svg"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              rent shield
            </span>
          </Navbar.Brand>
          <Dropdown
            inline
            label={<Avatar alt="User settings" img="/images/user-image.svg" />}
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
        <div className="ml-auto mr-10">
          <SearchBar />
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-red">
          <Navbar.Link href="#">
            <p className="text-lg">Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">
            <p className="text-lg">Search</p>
          </Navbar.Link>
          <Navbar.Link href="#">
            <p className="text-lg">Favourites</p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
