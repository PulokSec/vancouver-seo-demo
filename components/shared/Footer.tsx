import React from 'react';
import { footerData } from './data';
import Image from 'next/image';
type MyProps = {
  footerItems: any;
};
const Footer = (props: MyProps) => {
  const { footerItems } = props;
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
  <div className="col-span-2">
    <Image
      src="https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png"
      alt="Logo"
      width={120}
      height={40}
      quality={100}
    />
    <p className="mt-4">{footerData.contact.title}</p>
    <a href={`tel:${footerData.contact.phone}`} className="text-blue-400 mt-2 inline-block">
      {footerData.contact.phone}
    </a>
  </div>
  {footerItems?.map((footerItem, index) => {
    if (footerItem?.label === "Services") {
      return footerItem.childItems?.nodes?.map((section, sectionIndex) => (
        <div key={`${index}-${sectionIndex}`}>
          <a href={section?.uri} className="">
            <p className="text-lg font-semibold uppercase">{section.label}</p>
          </a>
          <ul className="mt-4 space-y-2">
            {section.childItems?.nodes?.map((link, linkIndex) => (
              <li key={`${sectionIndex}-${linkIndex}`}>
                <a href={link?.uri} className="text-gray-400 hover:text-white">
                  {link?.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ));
    }
    return null;
  })}
 
        <div>
            <p className="text-lg font-semibold uppercase">Company</p>
          <ul className="mt-4 space-y-2">
          {footerItems?.map((footerItem, index) => {
    if (footerItem?.parentId === null && footerItem?.label !== "Services") {
      return (
              <li key={index}>
                <a href={footerItem?.uri} className="text-gray-400 hover:text-white cursor-pointer">
                  {footerItem?.label}
                </a>
              </li>
            )}})}
          </ul>
        </div>
  {/* Explore Section */}
  <div>
    <p className="text-lg font-semibold">EXPLORE</p>
    <ul className="mt-4 space-y-2">
      {[
        { label: "Color Picker", uri: "#" },
        { label: "Emoji Cheat Sheet", uri: "#" },
        { label: "Conversion Rate Calculator", uri: "#" },
        { label: "SEO in Digital Marketing", uri: "#" },
        { label: "SEO vs. SEM", uri: "#" },
        { label: "Return on Ad Spend", uri: "#" },
        { label: "ROAS Calculator", uri: "#" },
      ].map((item, index) => (
        <li key={index}>
          <a href={item.uri} className="text-gray-400 hover:text-white">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">{footerData.footerNote}</p>
          <div className="flex justify-center space-x-4 mt-4">
            {footerData.partners.map((partner, index) => (
              <Image key={index} src='https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png' alt={partner} width={40} height={40} quality={100}/>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <p className="text-gray-400">{footerData.copyright}</p>
            <div className="flex space-x-4">
              {footerData.links.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-white">{link.name}</a>
              ))}
            </div>
            <div className="flex space-x-4">
              {footerData.social.map((social, index) => (
                <a key={index} href={social.href}>
                  <Image className="h-6 w-6" src={social.icon} alt={social.name} width={24} height={24} quality={100}/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
