'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
interface Reason {
  number: number;
  title: string;
  description: string;
}


type MyProps = {
  reasonSection : any;
}
const ReasonsSection = (props: MyProps) => {
  const { reasonSection } = props;
  console.log(reasonSection);
  return (
    <div className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="text-center mb-5">
        {/* <span className="text-red-500 font-semibold">Why SECI?</span> */}
        <h2 className="text-3xl font-bold text-gray-800 mt-2">{reasonSection?.title}</h2>
        <div className="text-gray-600 mt-4" dangerouslySetInnerHTML={{__html: reasonSection?.description}}>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-5">
        <a href={reasonSection?.linkUrl} className=""><button className=" bg-[#00C2CC] py-2 rounded text-white font-bold lg:w-[250px] flex justify-center uppercase"><span className="text-center px-1">{reasonSection?.linkText}</span></button></a>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasonSection?.featuredData.map((reason, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full">
                <span className="text-2xl font-bold">{idx+1}</span>
              </div>
              <div className="ml-4">
              <Fade cascade damping={0.2} triggerOnce direction='up'>
                <h3 className="text-xl font-semibold text-gray-800">{reason.title}</h3>
                <div className="mt-2 text-gray-600"dangerouslySetInnerHTML={{__html: reason.description}}></div>
                </Fade>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsSection;
