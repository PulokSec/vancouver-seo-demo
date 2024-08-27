import Image from 'next/image';
import React from 'react';
type MyProps = {
  bannerSection: any;
}
const AboutBanner = (props: MyProps) => {
  const { bannerSection } = props;
  console.log(bannerSection);
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-700 to-blue-500 bg-repeat bg-center lg:h-[100dvh]">
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
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 text-center mt-10 lg:mt-[15%]">
        <div className="lg:w-2/4 w-full md:px-3 flex flex-col items-center lg:items-start">
        <p className="text-md text-white">Go Beyond Your Wildest Dreams</p>
        <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-white mt-3">About Vancouverseo</h1>
        <p className="mt-4 text-lg text-center lg:text-start text-white">
        At Vancouverseo.com, we’re not just another digital marketing agency; we’re your dedicated partner in achieving online success. Our journey began in [year of establishment] with a mission to revolutionize the digital landscape in Vancouver and beyond. We’re proud to have played a vital role in the growth of numerous businesses, helping them unlock the full potential of their online presence.
        </p>
        <div className="flex items-center justify-center gap-4 py-5">
        <button className=" bg-[#00C2CC] hover:bg-[#001B42] text-white font-bold lg:w-[150px] flex justify-center shadow-[0px_0px_30px_0px_rgba(53,56,240,0.5)] "><span className="text-center px-1">Contact Us</span></button>
        {/* <button className=" bg-[#00C2CC] hover:bg-[#001B42] py-2 rounded text-white font-bold lg:w-[150px] flex justify-center"><span className="text-center px-1">{bannerSection?.applyButton}</span></button> */}
        </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
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
      </div>
      </div>
    </section>
    </div>
  );
};

export default AboutBanner;
