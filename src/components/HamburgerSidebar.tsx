'use client';

import { Sidebar } from 'flowbite-react';
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from 'react-icons/hi';

export default function HamburgerSidebar() {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="absolute top-14 -left-1 z-40 max-h-48"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p className="text-lg">Home</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            <p className="text-lg">Search</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p className="text-lg">Favourites</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
