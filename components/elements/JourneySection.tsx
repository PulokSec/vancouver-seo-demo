import React from 'react';

const JourneySection: React.FC = () => {
  return (
    <div className=" bg-black mt-20">
      {/* Left Side */}
      <section className="flex flex-col md:flex-row justify-between items-center  text-white py-16 px-4 md:px-10">
      <div className="text-center md:text-left md:w-1/2 text-white">
      <p className="text-md">We love the Expertise</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Mission</h2>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-px md:h-[300px] w-full md:w-[2px] bg-[#00C2CC] md:mx-8"></div>

      {/* Right Side */}
      <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8">
        <p className="mb-4">
        Our mission is to provide innovative and tailored SEO solutions that propel your business to new heights. We are committed to staying at the forefront of the ever-evolving digital marketing landscape, using cutting-edge strategies and techniques to ensure your brand remains visible, competitive, and relevant.
        </p>
        <p>
          Thank you for considering Vancouverseo.com as your trusted partner in SEO and digital marketing.
        </p>
      </div>
      </section>
    </div>
  );
};

export default JourneySection;
