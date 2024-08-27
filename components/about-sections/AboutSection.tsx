import Image from 'next/image';
type MyProps = {
  aboutSection : any;
}
const AboutSection = (props: MyProps)=> {
  const { aboutSection } = props;
  return (
    <div className="relative lg:w-screen w-full bg-gradient-to-r from-gray-50 to-blue-50 bg-repeat lg:h-[60vh]">
      {/* Foreground Image */}
      <div className="absolute inset-0 opacity-95">
        <Image
          src={aboutSection?.bgImage?.node?.sourceUrl}
          alt={aboutSection?.bgImage?.node?.altText}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="transition-all duration-300 ease-in-out"
        />
      </div>
    <section className="py-10 px-4 md:px-10 lg:px-20 lg:mt-20 mt-10 relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="flex-1 mt-6 md:mt-0 hidden lg:block">
        <Image
                src={aboutSection?.image?.node?.sourceUrl} // replace with your actual image path
                alt={aboutSection?.image?.node?.altText}
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
      <div className="flex-1 md:mr-10">
        <div className="p-6">
          <p className="text-md">The Sky's The Limit</p>
          <h2 className="text-5xl font-semibold text-gray-800">Our Vision</h2>
          {/* <div className="text-gray-700 text-lg pt-5" dangerouslySetInnerHTML={{__html: aboutSection?.description}}>
          </div> */}
          <p className="text-gray-700 text-lg pt-5">Our vision is simple yet profound: to be the driving force behind your online success. We envision a digital world where businesses of all sizes can thrive, and we’re here to make that vision a reality.</p>
          <a href={aboutSection?.linkUrl} className="mt-6 inline-block text-blue-500 font-semibold">{aboutSection?.linkText} →</a>
        </div>
      </div>
      <div className="flex-1 mt-6 md:mt-0 block lg:hidden">
        <Image
                src={aboutSection?.image?.node?.sourceUrl} // replace with your actual image path
                alt={aboutSection?.image?.node?.altText}
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

export default AboutSection;
