import Image from 'next/image';
import React from 'react';

type MyProps = {
  bannerSection: any;
};

const StrategySection = (props: MyProps) => {
  const { bannerSection } = props;

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-700 to-blue-500 bg-repeat bg-center lg:h-[60dvh] mt-20 overflow-hidden">
      {/* Wave Pattern */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path className="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
</svg>
        

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

      {/* Background Overlay */}
      <div
        className="absolute inset-0"
      ></div>

      <section className="lg:p-5 p-2 relative z-10">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10 text-center mt-10">
          <div className="lg:w-2/4 w-full md:px-3 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-white mt-3">
              On-page Optimization Strategies
            </h1>
            <p className="mt-4 text-lg text-center lg:text-start text-white">
              Improving your Vancouver search rankings requires on-page optimization. These strategies make your website search engine-friendly, boosting its visibility. Key tactics include crafting SEO content with relevant keywords for your Vancouver audience. Additionally, optimizing your website’s structure, navigation, and design enhances user experience and search engine recognition. Implement these strategies consistently to stay ahead in the competitive Vancouver market and draw more customers to your business.
            </p>
            <div className="flex items-center justify-center gap-4 py-5"></div>
          </div>
          <div className="flex-1 mt-6 md:mt-[-200px]">
            <Image
              src='https://vancouverseo.com/wp-content/uploads/2023/10/local-search-engine-optimization.webp' // replace with your actual image path
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

export default StrategySection;
