import Image from 'next/image';
import React from 'react';
type MyProps = {
  bannerSection: any;
}
const HomeBanner = (props: MyProps) => {
  const { bannerSection } = props;
  console.log(bannerSection);
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-700 to-blue-500 bg-center lg:h-[100dvh] overflow-hidden">
      {/* Foreground Image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src={bannerSection?.bgImage?.node?.sourceUrl}
          alt={bannerSection?.bgImage?.node?.altText}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="transition-all duration-300 ease-in-out"
        />
      </div>
      <section className="lg:p-5 p-2 relative">
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 text-center mt-10 lg:mt-[10%]">
        <div className="lg:w-3/4 w-full md:px-3 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl font-bold text-center lg:text-start text-white lg:text-6xl">{bannerSection?.bannerTitle}</h1>
        <p className="mt-4 text-lg text-center lg:text-start text-white">
        {bannerSection?.bannerDescription}
        </p>
        <div className="flex items-center justify-center gap-4 py-5">
        <button className=" bg-[#00C2CC] hover:bg-[#001B42] py-2 rounded text-white font-bold lg:w-[150px] flex justify-center"><span className="text-center px-1">{bannerSection?.contactButton}</span></button>
        <button className=" bg-[#00C2CC] hover:bg-[#001B42] py-2 rounded text-white font-bold lg:w-[150px] flex justify-center"><span className="text-center px-1">{bannerSection?.applyButton}</span></button>
        </div>
        </div>
        <div className="mt-10 w-full p-2 bg-[#ebf0fa]  rounded shadow-lg lg:w-2/4 py-5 lg:py-10 text-gray-900">
          <p className="text-2xl font-bold text-gray-900">Call: (778) 655-8505</p>
          <p className="mt-2">Or fill in the form below and we'll call you.</p>
          <form className="mt-5 space-y-4 lg:mt-10">
            <input type="text" placeholder="Full Name" className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]" required />
            <input type="email" placeholder="Email Address" className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]" required />
            <input type="tel" placeholder="Phone" className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]" required />
            <input type="text" placeholder="Company Website" className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]" required />
            <textarea placeholder="Message" className="w-full p-2 rounded text-gray-900 lg:w-[300px] xl:w-[400px]" required></textarea>
            <button type="submit" className="w-full bg-[#00C2CC] hover:bg-[#001B42] py-2 rounded text-white font-bold lg:w-[300px] xl:w-[400px]">Get A Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HomeBanner;
