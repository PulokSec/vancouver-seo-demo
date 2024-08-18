'use client';
import { useState } from 'react';
import Image from 'next/image';

type MyProps = {
  featuredData : any;
}

const TabRenovation = (props: MyProps) => {
  const { featuredData } = props;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20">
      <div className="w-full md:w-2/4">
        <ul className="flex flex-col">
          {featuredData.map((tab, id:number) => (
            <li
              key={id}
              className={`cursor-pointer border rounded-lg shadow p-4 mt-3 ${activeTab === id ? 'bg-gradient-to-r from-[#3A5DE1] via-[#414EDD] to-[#356AE4] text-white' : 'bg-gradient-to-r from-gray-50 to-blue-50'}`}
              onClick={() => setActiveTab(id)}
            >
              <div className="flex flex-col items-center">
                {/* <Image src={tab.imageUrl} alt={tab.imageAlt} width={50} height={50} className="mb-2" /> */}
                <h3 className="text-center text-xl">{tab.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-3/4 mt-6">
        {featuredData.map((tab,id:number) => (
          <div
            key={id}
            className={`bg-gradient-to-r from-[#3A5DE1] via-[#414EDD] to-[#356AE4] rounded-lg p-6  ${activeTab === id ? 'block' : 'hidden'}`}
            aria-labelledby={`tab-${tab.id}-label`}
          >
            {/* <div className="text-center mb-4">
              <Image src={tab.imageUrl} alt={tab.imageAlt} width={500} height={300} className="mx-auto" />
            </div> */}
            {/* <h4 className="text-center">{tab.title}</h4> */}
            <div className="text-center md:text-left lg:text-lg text-white" dangerouslySetInnerHTML={{__html: tab.description}}></div>
            {/* <ul className="list-disc list-inside">
              {tab.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TabRenovation;
