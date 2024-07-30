import React from 'react';

const HomeBanner: React.FC = () => {
  return (
    <div className="bg-gray-100 lg:p-5 p-2">
      <div className="flex lg:flex-row flex-col items-center justify-center gap-8 text-center mt-10">
        <div className="w-3/4 px-3 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl font-bold text-center lg:text-start">Vancouver SEO Agency Local SEO Experts At All Things</h1>
        <p className="mt-4 text-lg text-center lg:text-start">
        Welcome to the exciting world of digital marketing and SEO! As a business owner in Vancouver, you know how crucial it is to have a strong online presence. That’s where we come in – as the leading Vancouver SEO agency, we are passionate about helping local businesses thrive in the competitive online landscape. Our team of SEO experts is well-versed in all things SEO, from keyword research and optimization to content creation and link building.
        </p>
        <div className="flex items-center justify-center gap-4 py-5">
        <button className=" bg-red-600 py-2 rounded text-white font-bold lg:w-[150px] flex justify-center"><span className="text-center px-1">Contact Us</span></button>
        <button className=" bg-red-600 py-2 rounded text-white font-bold lg:w-[150px] flex justify-center"><span className="text-center px-1">Go Service</span></button>
        </div>
        </div>
        <div className="mt-10 w-full p-2 bg-gradient-to-r from-[#3A5DE1] via-[#414EDD] to-[#356AE4] text-white rounded-lg shadow-lg lg:w-2/4">
          <h2 className="text-xl font-bold text-white">Call: +1-717-207-7706</h2>
          <p className="mt-2">Or fill in the form below and we'll call you.</p>
          <form className="mt-4 space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 rounded text-black lg:w-[300px]" required />
            <input type="email" placeholder="Email Address" className="w-full p-2 rounded text-black lg:w-[300px]" required />
            <input type="tel" placeholder="Phone" className="w-full p-2 rounded text-black lg:w-[300px]" required />
            <textarea placeholder="Message" className="w-full p-2 rounded text-black lg:w-[300px]" required></textarea>
            <button type="submit" className="w-full bg-red-600 py-2 rounded text-white font-bold lg:w-[300px]">Get A Free Consultation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
