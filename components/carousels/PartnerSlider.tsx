'use client';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import CarouselComponent from './CarouselComponent';

const partners = [
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'Google Partner' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'Hubspot Partner' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'Upwork' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'Clutch' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'ISO' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'GoodFirms' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'GoodFirms' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'GoodFirms' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'GoodFirms' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'GoodFirms' },
  { src: 'https://vancouverseo.com/wp-content/uploads/2021/11/cropped-Vancouver-SEO.png', alt: 'GoodFirms' },
];

type MyProps = {
  partnerData : any;
}

const PartnersSlider = (props: MyProps) => {
  const { partnerData } = props;
  return (
    <section className="mt-20">
      <CarouselComponent>
        {partnerData.map((partner, index) => (
          <div key={index} className="flex justify-center items-center gap-2">
            <Image src={partner.image.node.sourceUrl} alt={partner.image.node.altText} width={160} height={100} quality={100} className='w-full md:w-[200px] h-[160px] lg:w-[260px] bg-white border shadow-md'/>
          </div>
        ))}
      </CarouselComponent>
    </section>
  );
};

export default PartnersSlider;
