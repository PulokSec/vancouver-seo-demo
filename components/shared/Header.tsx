'use client';
import React, { useState } from 'react';
import { headerData } from './data';
import Image from 'next/image';
import { FiPhoneCall, FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <header className="bg-gradient-to-r from-[#3A5DE1] via-[#414EDD] to-[#356AE4] shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Image src={headerData.logo} alt="Logo" width={120} height={40} />
        <nav className="hidden md:flex space-x-4">
          {headerData.menuItems.map((menuItem, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="text-white hover:text-gray-900 focus:outline-none">
                {menuItem.title}
                {menuItem?.title === 'Services' && <FiChevronDown />}
              </button>
              {hoveredMenu === index && menuItem.title === 'Services' && (
                <div className="absolute left-0 lg:w-screen md:w-[600px] max-w-3xl bg-white shadow-lg p-6 z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {menuItem.submenu.items.map((column, colIndex) => (
                      <div key={colIndex}>
                        <p className="font-semibold mb-2 text-sm">{column.category}</p>
                        <ul className="space-y-1">
                          {column.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href="#" className="text-gray-700 hover:text-gray-900 text-xs">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <a href={`tel:${headerData.phone}`} className="hidden md:flex items-center border-l-2 border-white border-spacing-4 text-white">
          <FiPhoneCall className="mr-2 mx-5" />
          {headerData.phone}
        </a>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-4 text-center flex flex-col items-center">
            {headerData.menuItems.map((menuItem, index) => (
              <div key={index} className="">
                <button
                  className="text-gray-700 hover:text-gray-900 focus:outline-none w-full flex justify-between items-center text-lg"
                  onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                >
                  <span className="w-full text-center">{menuItem.title}</span>
                  {menuItem?.title === "Services" && <FiChevronDown />}
                </button>
                {activeSubmenu === index && menuItem.title === 'Services' && (
                  <div className="text-left pl-4">
                    <div className="flex flex-col items-center">
                      {menuItem.submenu.items.map((column, colIndex) => (
                        <div key={colIndex} className="mb-4 w-full text-center">
                          <p className="mt-2 font-semibold mb-2">{column.category}</p>
                          <ul className="space-y-2">
                            {column.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a href={`tel:${headerData.phone}`} className="flex items-center justify-center text-blue-600">
              <FiPhoneCall className="mr-2" />
              {headerData.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;

