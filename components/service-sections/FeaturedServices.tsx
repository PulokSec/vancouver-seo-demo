'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

type MyProps = {
  featuredSection: any;
};

export default function FeaturedServices(props: MyProps) {
  const { featuredSection } = props;
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Adjust this value as needed
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          if (sectionRefs.current[index]) {
            sectionRefs.current[index]?.classList.add('animate-slide-in');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">{featuredSection?.title}</h2>
        <div className="mt-2 text-xl text-gray-600" dangerouslySetInnerHTML={{ __html: featuredSection?.description }}></div>
      </div>
      <div>
        {featuredSection?.featuredData.map((item, index) => (
          <div
            key={index}
            ref={(el:any) => (sectionRefs.current[index] = el)}
            // className={`flex flex-col transition-opacity duration-700 ease-out opacity-0 transform ${
            //   index % 2 === 0 ? 'md:flex-row slide-in-from-left' : 'md:flex-row-reverse slide-in-from-right'
            // } items-center mb-8`}
            className={`flex flex-col ${ index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-8`}
          >
            <div className="md:w-1/2 p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-800 text-center md:text-left">{item?.title}</h3>
              <div className="flex flex-col items-center justify-center mb-4 space-y-5 py-5 text-lg" dangerouslySetInnerHTML={{ __html: item?.description }}></div>
            </div>
            <div className="md:w-1/2 p-4">
              <Image
                src={item?.image?.node?.sourceUrl}
                alt={item?.image?.node?.altText}
                className="rounded-2xl shadow-md w-full lg:w-[700px] h-[400px] object-cover"
                width={700}
                height={475}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
