import React from 'react';
import { FaArrowRight } from "react-icons/fa";


type MyProps = {
  serviceSection : any;
}
const HomeServices = (props: MyProps) => {
  const { serviceSection } = props;
  return (
    <section className="flex flex-col items-center py-10 bg-gray-100 px-4 md:px-10 lg:px-20 mt-20 lg:mt-40">
      <div className="text-center mb-10">
      <p className="mt-2 text-xl text-gray-600">{serviceSection?.shortTitle}</p>
        <h2 className="text-3xl font-bold text-gray-800">{serviceSection?.title}</h2>
        <div className="mt-2 text-xl text-gray-600" dangerouslySetInnerHTML={{__html: serviceSection?.description}}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceSection?.featuredData.map((solution, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-between">
            <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{solution.title}</h3>
            <div className="mt-4 text-gray-600" dangerouslySetInnerHTML={{__html: solution.description}}></div>
            {/* <ul className="mt-4 space-y-2">
              {solution.points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul> */}
            </div>
            <div className="border-t-2 border-t-[#356AE4] w-full text-end pr-3 flex items-center justify-center gap-2">
            <a href={solution.linkUrl} className="mt-2 text-blue-500 font-semibold pb-3">{solution.linkText}</a>
            <p className="text-blue-500"><FaArrowRight /></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
