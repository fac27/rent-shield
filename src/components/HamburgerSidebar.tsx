'use client';

import { Sidebar } from 'flowbite-react';
import { AiFillHome, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';

export default function HamburgerSidebar() {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="absolute top-14 -left-1 z-40 max-h-48"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={AiFillHome}>
            <p className="text-lg">Home</p>
          </Sidebar.Item>
          <Sidebar.Item href="/search-preferences" icon={AiOutlineSearch}>
            <p className="text-lg">Search</p>
          </Sidebar.Item>
          <Sidebar.Item href="/favourites" icon={AiOutlineHeart}>
            <p className="text-lg">Favourites</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
