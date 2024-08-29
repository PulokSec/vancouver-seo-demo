'use client';
import React, { useRef, useState } from 'react';
import { headerData } from './data';
import Image from 'next/image';
import { FiPhoneCall, FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { UseClickOutside } from '../hooks/UseClickOutside';

type MyProps = {
  headerItems: any;
};
const Header = (props: MyProps) => {
  const { headerItems } = props;
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const domNode: any = useRef();
  UseClickOutside(domNode.current, () => {
    setHoveredMenu(null);
  });
  return (
    <header className="bg-gradient-to-r from-[#3A5DE1] via-[#414EDD] to-[#356AE4] shadow sticky w-full top-0 z-10 ">
      <section className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Image src={headerData.logo} alt="Logo" width={120} height={40} quality={100}/>
        <nav className="hidden md:flex space-x-16" >
          {headerItems.map((menuItem, index) => (
            <div
              key={index}
              className={`${menuItem?.parentId === null ? 'block' : 'hidden'} relative`}
              onMouseEnter={() => setHoveredMenu(index)} 
            >
              {
                menuItem?.parentId === null && (
                  <a href={menuItem?.url}>
                <p className="text-white hover:text-gray-900 focus:outline-none flex items-center justify-center xl:text-xl gap-1 hover:font-semibold" >
                {menuItem.label}
                {menuItem?.childItems?.nodes?.length > 0 && (
                  hoveredMenu === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />
                )}
                </p>
              </a>
                )
              }
              {hoveredMenu === index && menuItem?.childItems?.nodes?.length > 0 && (
                <div className="absolute left-0 lg:w-screen md:w-[600px] max-w-3xl bg-white shadow-lg p-6 mt-[22px] transition-all duration-300 ease-in-out" ref={domNode} onMouseLeave={() => setHoveredMenu(null)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {menuItem?.childItems?.nodes?.map((column, colIndex) => (
                      <div key={colIndex}>
                        <a href={column?.uri} className=""><p className="font-semibold mb-2 text-lg hover:font-bold transition-all duration-300 ease-in-out hover:scale-122">{column.label}</p></a>
                        {
                          column?.childItems?.nodes?.length !== 0 && (
                            <ul className="space-y-1">
                          {column?.childItems?.nodes?.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href={item?.uri} className="text-gray-700 text-md hover:text-[#414EDD] hover:font-semibold transition-all duration-300 ease-in-out hover:scale-125">
                                {item?.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                          )
                        }
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <a href="tel:7786558505" className="hidden md:flex items-center justify-center gap-2 border-l-2 border-white border-spacing-4 text-white">
          <FiPhoneCall className="mr-2 mx-5" />
          (778) 655-8505
        </a>
        <div className="md:hidden text-white">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </section>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg transition-[max-height,transform] duration-300 origin-top">
          <nav className="px-4 text-center flex flex-col items-center py-5">
            {headerItems.map((menuItem, index) => (
              <div key={index} className="">
                {
                menuItem?.parentId === null && (
                  <a href={menuItem?.url}>
                <p
                  className="text-gray-700 hover:text-gray-900 focus:outline-none w-full flex justify-center items-center text-xl py-1 gap-2"
                  onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                >
                  <span className="text-center">{menuItem.label}</span>
                  {menuItem?.childItems?.nodes?.length > 0 && (
                  activeSubmenu === index ? <FiChevronUp/> : <FiChevronDown/>
                )}
                </p>
                </a>
                )}
                {activeSubmenu === index && menuItem?.childItems?.nodes?.length > 0 && (
                  <div className="text-left pl-4">
                    <div className="flex flex-col items-center">
                      {menuItem?.childItems?.nodes?.map((column, colIndex) => (
                        <div key={colIndex} className="mb-4 w-full text-center">
                          <a href={column?.uri} className=""><p className="font-semibold mb-2 mt-2 ">{column.label}</p></a>
                          {
                          column?.childItems?.nodes?.length !== 0 && (
                            <ul className="space-y-1=2">
                          {column?.childItems?.nodes?.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href={item?.uri} className="text-gray-700 hover:text-gray-900">
                                {item?.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                          )
                        }
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a href="tel:7786558505" className="flex items-center justify-center text-blue-600 py-1">
              <FiPhoneCall className="mr-2" />
              (778) 655-8505
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;

