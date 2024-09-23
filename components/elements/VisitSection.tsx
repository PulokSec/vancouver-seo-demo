import Image from 'next/image';
import React from 'react';
type MyProps = {
  bannerSection: any;
}
const VisitSection = (props: MyProps) => {
  const { bannerSection } = props;
  console.log(bannerSection);
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-700 to-blue-500 bg-repeat bg-center lg:h-[50dvh]">
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
        <div className="lg:w-2/4 w-full md:px-3 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-white mt-3">Visit Our Office</h1>
        <p className="mt-4 text-lg text-center lg:text-start text-white">
        If you'd like to meet our team in person and have an in-depth discussion about your digital marketing goals, please schedule an appointment before visiting our office. This ensures that the right team members are available to assist you and address your needs.
        </p>
        <div className="flex items-center justify-center gap-4 py-5">
        </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
        <Image
                src='https://vancouverseo.com/wp-content/uploads/2022/07/Seo-vancouver-22.jpeg' // replace with your actual image path
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

export default VisitSection;
