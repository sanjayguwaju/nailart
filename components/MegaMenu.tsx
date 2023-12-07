"use client"

import { useState, ReactNode } from 'react';
import Link from 'next/link';

// Define a type for the props of MenuItem
type MenuItemProps = {
  children: ReactNode;
  href: string; // In Next.js, the prop is 'href', not 'to'
};

const MenuItem: React.FC<MenuItemProps> = ({ children, href }) => (
  <Link href={href}>
    <a className="...">{children}</a> {/* Wrap only the <a> tag */}
  </Link>
);

// Define a type for the props of Dropdown
type DropdownProps = {
  children: ReactNode;
  label: string;
};

const Dropdown: React.FC<DropdownProps> = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="...">
        {label}
        {/* Arrow Icon Here */}
      </button>
      {isOpen && (
        <div className="absolute z-10 ...">
          {children}
        </div>
      )}
    </div>
  );
};

const MegaMenu: React.FC = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 ...">
      <div className="...">
        {/* Logo and Main Menu Items */}
        <MenuItem href="/">Home</MenuItem>
        <Dropdown label="Company">
          {/* Dropdown Items */}
          <MenuItem href="/about-us">About Us</MenuItem>
          <MenuItem href="/library">Library</MenuItem>
          {/* More Items... */}
        </Dropdown>
        {/* More Menu Items... */}
      </div>
    </nav>
  );
};

export default MegaMenu;
