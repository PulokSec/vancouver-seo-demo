'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
type MyProps = {
  featuredSection: any;
};

export default function FeaturedServices(props: MyProps) {
  const { featuredSection } = props;
  console.log(featuredSection);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-20">
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold text-gray-800">{featuredSection?.title}</h2>
        <div className="mt-2 text-xl text-gray-600" dangerouslySetInnerHTML={{ __html: featuredSection?.description }}></div>
      </div>
        <div className="flex items-center justify-center gap-4 py-5">
        <a href={featuredSection?.linkUrl} className=""><button className=" bg-[#00C2CC] py-2 rounded text-white font-bold lg:w-[250px] flex justify-center uppercase"><span className="text-center px-1">{featuredSection?.linkText}</span></button></a>
        </div>
      <div>
        {featuredSection?.featuredData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${ index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-8`}
          >
            <div className="md:w-1/2 p-4 rounded-lg">
            <Fade cascade damping={0.2} triggerOnce direction='up'>
              <h3 className="text-3xl font-bold text-gray-800 text-center md:text-left">{item?.title}</h3>
              <div className="flex flex-col items-center justify-center mb-4 space-y-5 py-5 text-lg text-center md:text-left" dangerouslySetInnerHTML={{ __html: item?.description }}></div>
              </Fade>
            </div>
            <div className="md:w-1/2 p-4">
            <Fade direction={index % 2 === 0 ? 'right': 'left'} delay={0.5} fraction={0.2} triggerOnce>
              <Image
                src={item?.image?.node?.sourceUrl}
                alt={item?.image?.node?.altText}
                className="rounded shadow-md w-full lg:w-[700px] h-[400px] object-cover"
                width={700}
                height={475}
                quality={100}
              />
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
