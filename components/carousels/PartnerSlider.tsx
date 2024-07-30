import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
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


const PartnersSlider: React.FC = () => {
  return (
    <section className="mt-20">
      <CarouselComponent>
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={partner.src} alt={partner.alt} width={160} height={100} />
          </div>
        ))}
      </CarouselComponent>
    </section>
  );
};

export default PartnersSlider;
