import React from 'react';
import Image from 'next/image';
import TabRenovation from '../tab-sections/TabRenovation';
type MyProps = {
  choiceSection : any;
}
const HomeChoiceSection = (props: MyProps)=> {
  const { choiceSection } = props;
  console.log(choiceSection);
  return (
    <div className="relative w-screen bg-gradient-to-r from-gray-50 to-blue-50 bg-repeat">
      {/* Foreground Image */}
      <div className="absolute inset-0 opacity-95">
        <Image
          src={choiceSection?.bgImage?.node?.sourceUrl}
          alt={choiceSection?.bgImage?.node?.altText}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="transition-all duration-300 ease-in-out"
        />
      </div>
    <section className="py-10 px-4 md:px-10 lg:px-20 lg:mt-20 mt-10 relative">
      <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex-1 md:mr-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800">{choiceSection?.title}</h2>
          <div className="text-gray-700 text-lg pt-5" dangerouslySetInnerHTML={{__html: choiceSection?.description}}>
          </div>
          <a href={choiceSection?.linkUrl} className="mt-6 inline-block text-blue-500 font-semibold">{choiceSection?.linkText} →</a>
        </div>
      </div>
      <div className="flex-1 mt-6 md:mt-0">
        <Image
          src={choiceSection?.image?.node?.sourceUrl} // replace with your actual image path
          alt={choiceSection?.image?.node?.altText}
          width={500}
          height={400}
          objectFit='cover'
          className="rounded-2xl w-full lg:w-[700px] h-[400px] object-cover shadow-lg"
          quality={100}
        />
      </div>
      </div>
      <TabRenovation featuredData={choiceSection?.featuredData} />
      </section>
    </div>
  );
};

export default HomeChoiceSection;
