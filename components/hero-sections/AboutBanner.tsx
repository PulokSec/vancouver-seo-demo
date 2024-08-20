import Image from 'next/image';
import React from 'react';
type MyProps = {
  bannerSection: any;
}
const AboutBanner = (props: MyProps) => {
  const { bannerSection } = props;
  console.log(bannerSection);
  return (
    <div className="relative max-w-screen w-full bg-gradient-to-r from-blue-700 to-blue-500 bg-repeat bg-center">
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
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 text-center mt-10">
        <div className="w-3/4 md:px-3 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl font-bold text-center lg:text-start text-white">{bannerSection?.bannerTitle}</h1>
        <p className="mt-4 text-lg text-center lg:text-start text-white">
        {bannerSection?.bannerDescription}
        </p>
        <div className="flex items-center justify-center gap-4 py-5">
        <button className=" bg-[#00C2CC] hover:bg-[#001B42] py-2 rounded text-white font-bold lg:w-[150px] flex justify-center"><span className="text-center px-1">{bannerSection?.contactButton}</span></button>
        <button className=" bg-[#00C2CC] hover:bg-[#001B42] py-2 rounded text-white font-bold lg:w-[150px] flex justify-center"><span className="text-center px-1">{bannerSection?.applyButton}</span></button>
        </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
        <Image
                src={bannerSection?.image?.node?.sourceUrl} // replace with your actual image path
                alt={bannerSection?.image?.node?.altText}
                className="rounded-2xl shadow-md w-full lg:w-[700px] h-[400px]"
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
