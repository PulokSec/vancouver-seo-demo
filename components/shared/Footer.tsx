import React from 'react';
import { footerData } from './data';
import Image from 'next/image';
type MyProps = {
  footerItems: any;
};
const Footer = (props: MyProps) => {
  const { footerItems } = props;
  console.log(footerItems);
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          <div className="col-span-2">
            <Image src="https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png" alt="Logo" width={120} height={40} />
            <p className="mt-4">{footerData.contact.title}</p>
            <a href={`tel:${footerData.contact.phone}`} className="text-blue-400 mt-2 inline-block">{footerData.contact.phone}</a>
          </div>
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{section.heading}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">{footerData.footerNote}</p>
          <div className="flex justify-center space-x-4 mt-4">
            {footerData.partners.map((partner, index) => (
              <Image key={index} src='https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png' alt={partner} width={40} height={40} />
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
                  <Image className="h-6 w-6" src={social.icon} alt={social.name} width={24} height={24} />
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
