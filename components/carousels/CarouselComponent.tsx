'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
// import '../../styles/carousel.css';
export default function CarouselComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1799, min: 1200 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1199, min: 676 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 675, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const CustomRight = ({ onClick }: any) => {
    return (
      <button
        aria-label='Right Arrow'
        className='absolute right-0 z-10 bg-none'
        onClick={() => onClick()}
      >
        {/* <IoIosArrowForward
          className='cursor-pointer border-none text-[#E2C379]'
          strokeWidth={10}
        /> */}
        <ChevronRight
          className='h-6 w-6 cursor-pointer border-none text-[#3B82F6] transition-all duration-300 ease-in-out hover:scale-125'
          strokeWidth={4}
        />
      </button>
    );
  };
  const CustomLeft = ({ onClick }: any) => {
    // onMove means if dragging or swiping in progress.
    return (
      <button
        aria-label='Left Arrow'
        className='absolute left-0 z-10 bg-none'
        onClick={() => onClick()}
      >
        {/* <IoIosArrowBack
          className='cursor-pointer text-center text-[#E2C379]'
          strokeWidth={10}
        /> */}
        <ChevronLeft
          className='h-6 w-6 cursor-pointer border-none text-[#3B82F6] transition-all duration-300 ease-in-out hover:scale-125'
          strokeWidth={4}
        />
      </button>
    );
  };

  return (
    <div>
      <div className='relative py-5'>
        <Carousel
          // arrows
          responsive={responsive}
          // centerMode={true}
          showDots={false}
          infinite={false}
          keyBoardControl
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          minimumTouchDrag={80}
          pauseOnHover
          autoPlay={true}
          autoPlaySpeed={5000}
          // customTransition='all 20s linear'
          transitionDuration={500}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          partialVisible={false}
          dotListClass='custom-dot-list-style'
          rewind
          containerClass=''
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          customRightArrow={<CustomRight />}
          customLeftArrow={<CustomLeft />}
          itemClass=''
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
}
