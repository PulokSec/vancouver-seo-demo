'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";


type MyProps = {
  serviceSection : any;
}
const FeaturedTabService = (props: MyProps) => {
  const { serviceSection } = props;
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="relative w-full bg-blue-300 bg-center overflow-hidden mt-40">
      {/* Foreground Image */}
      <div className="absolute inset-0 opacity-55">
        <Image
          src={serviceSection?.bgImage?.node?.sourceUrl}
          alt={serviceSection?.bgImage?.node?.altText}
          layout="fill"
          objectFit="cover"
          quality={100}
          className=""
        />
      </div>
    <section className="flex flex-col items-center py-10  px-4 md:px-10 lg:px-20 mt-20 relative">
      <div className="text-center mb-10">
      <p className="mt-2 text-xl text-gray-600">{serviceSection?.shortTitle}</p>
        <h2 className="text-3xl font-bold text-gray-800">{serviceSection?.title}</h2>
        <div className="mt-2 text-xl text-gray-600" dangerouslySetInnerHTML={{__html: serviceSection?.description}}></div>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        {serviceSection?.featuredData.map((tab, index) => (
          <button
            key={index}
            className={`p-2 m-2 text-sm font-medium rounded ${activeTab === index ? 'bg-[#001B42] text-white' : 'bg-white text-black border hover:text-white'} transition-colors duration-200`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white border rounded shadow-sm flex flex-col items-center">
        <p>{serviceSection?.featuredData[activeTab].content}</p>
        <div className="p-4">
            <div className="mt-4 text-gray-600" dangerouslySetInnerHTML={{__html: serviceSection?.featuredData[activeTab].description}}></div>
            </div>
            <div className="border-t-2 border-t-[#356AE4] w-full text-end pr-3 cursor-pointer">
            <a href={serviceSection?.featuredData[activeTab].linkUrl} className="mt-2 text-blue-500 font-semibold py-5 flex items-center justify-center gap-2 ">{serviceSection?.featuredData[activeTab].linkText} <p className="text-blue-500"><FaArrowRight /></p></a>
            {/* <p className="text-blue-500 mt-2"><FaArrowRight /></p> */}
            </div>
      </div>
    </section>
    </div>
  );
};

export default FeaturedTabService;
