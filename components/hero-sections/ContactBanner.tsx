import Image from 'next/image';
import React from 'react';
type MyProps = {
  bannerSection: any;
}
const ContactBanner = (props: MyProps) => {
  const { bannerSection } = props;
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-700 to-blue-500 bg-repeat bg-center lg:h-[60dvh]">
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
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 text-center mt-10 lg:mt-20">
        <div className="lg:w-2/4 w-full md:px-3 flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-white mt-5 lg:mt-20">Contact Vancouverseo</h1>
        <p className="mt-4 text-lg text-center text-white">
        We would Be Happy To Assist You
        </p>
        <div className="flex items-center justify-center gap-4 py-5">
        {/* <button className=" bg-[#00C2CC] hover:bg-[#001B42] text-white font-bold lg:w-[150px] flex justify-center shadow-[0px_0px_30px_0px_rgba(53,56,240,0.5)] "><span className="text-center px-1">Contact Us</span></button> */}
        {/* <button className=" bg-[#00C2CC] hover:bg-[#001B42] py-2 rounded text-white font-bold lg:w-[150px] flex justify-center"><span className="text-center px-1">{bannerSection?.applyButton}</span></button> */}
        </div>
        </div>
        {/* <div className="flex-1 mt-6 md:mt-0">
        <Image
                src='https://cdn-eabih.nitrocdn.com/ZQfizZxQIikmSihwfYEnJxkANfkzMZTt/assets/images/optimized/rev-adf0c7e/wp-content/uploads/2022/07/Seo-vancouver-50.jpeg' // replace with your actual image path
                alt={bannerSection?.image?.node?.altText}
                className="rounded-2xl shadow-md w-full lg:w-[700px] h-[500px]"
                objectFit='contain'
                width={700}
                height={475}
                style={{
                  borderRadius: '300px 100px 100px 100px',
                }}
                quality={100}
              />
      </div> */}
      </div>
    </section>
    </div>
  );
};

export default ContactBanner;
