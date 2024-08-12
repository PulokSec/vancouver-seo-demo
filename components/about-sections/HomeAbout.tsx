import React from 'react';
import Image from 'next/image';

type MyProps = {
  aboutSection : any;
}

const HomeAboutSection = (props: MyProps) => {
  const { aboutSection } = props;
  console.log(aboutSection);
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 px-4 md:px-10 lg:px-20 mt-20">
      <div className="w-full">
        <div className="p-8 md:flex items-center">
          <div className="w-full mx-auto container">
            <h2 className="mt-2 text-4xl font-bold text-gray-800 text-center">{aboutSection?.title}</h2>
            <p className="mt-4 text-gray-600 text-center">
              {aboutSection?.description}
            </p>
          </div>
        </div>
      </div>
        <div className="relative w-full h-64 md:h-96 bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mb-[-10%]">
          <Image
            src={aboutSection?.image?.node?.sourceUrl} // Update with your image path
            alt={aboutSection?.image?.node?.altText}
            fill
            objectFit="contain"
            className="rounded-b-lg"
          />
        </div>
    </div>
  );
};

export default HomeAboutSection;
