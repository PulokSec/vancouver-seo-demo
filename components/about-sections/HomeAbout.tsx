import React from 'react';
import Image from 'next/image';

const HomeAboutSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 px-4 md:px-10 lg:px-20 mt-20">
      <div className="w-full">
        <div className="p-8 md:flex items-center">
          <div className="w-full mx-auto container">
            <h2 className="mt-2 text-4xl font-bold text-gray-800 text-center">Who We Are</h2>
            <p className="mt-4 text-gray-600 text-center">
            At Vancouver SEO, we’re more than just an agency; we’re a collective of passionate digital marketing enthusiasts with a keen focus on SEO. Our mission is simple – to empower your brand and help it flourish in the bustling digital landscape. We’re honored to be recognized as the top SEO company in Vancouver, a reputation we’ve earned through years of dedication and remarkable results.
            </p>
          </div>
        </div>
      </div>
        <div className="relative w-full h-64 md:h-96 bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mb-[-10%]">
          <Image
            src="https://vancouverseo.com/wp-content/uploads/2023/10/seo-company-in-vancouver.webp" // Update with your image path
            alt="Office"
            fill
            objectFit="contain"
            className="rounded-b-lg"
          />
        </div>
    </div>
  );
};

export default HomeAboutSection;
