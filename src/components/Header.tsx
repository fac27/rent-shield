'use client';
import Image from 'next/image';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';

const Header = () => {
  return (
    <header>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <Image
            width="30"
            height="30"
            alt="Rent-shield logo"
            className="mr-3 h-6 sm:h-9"
            src="/src/app/favicon.ico"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            rent shield
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 dark:text-white">
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
          <Navbar.Toggle />
        </div>
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
