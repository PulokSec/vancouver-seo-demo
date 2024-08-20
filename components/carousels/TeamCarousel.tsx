'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import TeamCard from '../Cards/TeamCard';

const teams = [
  { name: 'Gosia Kwiecień', position: 'Head of SEO', imageSrc: 'https://delante.co/wp-content/uploads/2022/10/gosia.jpg' },
  { name: 'Milena Fietko', position: 'SEO Strategy Manager', imageSrc: 'https://delante.co/wp-content/uploads/2022/10/milena-nowe.jpg' },
  { name: 'Joanna Nicpoń', position: 'Senior SEO Specialist', imageSrc: 'https://delante.co/wp-content/uploads/2022/10/Asia-nicpon-2.jpg' },
  { name: 'Paulina Konopka', position: 'Senior SEO Specialist', imageSrc: 'https://delante.co/wp-content/uploads/2022/10/paulina.jpg' },
  { name: 'Przemek Jaskierski', position: 'Senior SEO Specialist', imageSrc: 'https://delante.co/wp-content/uploads/2022/10/przemek.jpg' },
  { name: 'Klaudia Tokarska', position: 'SEO Specialist', imageSrc: 'https://delante.co/wp-content/uploads/2022/10/klaudia.jpg' },
  { name: 'Monika Wądrzyk', position: 'SEO Specialist', imageSrc: 'https://delante.co/wp-content/uploads/2022/10/monika-wadrzyk.jpg' },
  { name: 'Magda Mielewska', position: 'SEO Specialist', imageSrc: 'https://delante.co/wp-content/uploads/2023/01/magda-mielewska-1.jpg' },
  { name: 'Damian Hliwa', position: 'Senior SEO Specialist', imageSrc: 'https://delante.co/wp-content/uploads/2022/11/damian-hliwa.jpg' },
  // { name: 'Bartek Kubala', position: 'SEO Specialist', imageSrc: '/images/bartek_kubala.jpg' },
  // { name: 'Wiktoria Wójciak', position: 'SEO Specialist', imageSrc: '/images/wiktoria_wojciak.jpg' },
  // { name: 'Wojciech Urban', position: 'SEO R&D Specialist', imageSrc: '/images/wojciech_urban.jpg' },
  // { name: 'Ania Bitner', position: 'Senior Content Specialist', imageSrc: '/images/ania_bitner.jpg' },
];

const TeamCarousel: React.FC = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    beforeChange: (current, next) => {
      setCardIndex(next);
    },
  };

  const getSlideClass = (index: number) => {
    if (index === cardIndex) return 'slide activeSlide';
    if (index === (cardIndex - 1 + teams.length) % teams.length) return 'slide prevSlide';
    if (index === (cardIndex + 1) % teams.length) return 'slide nextSlide';
    return 'slide lg:py-20 py-5';
  };

  return (
    <section className="lg:mt-20 mt-5">
      <Slider {...settings}>
        {teams.map((team, index) => (
          <div key={index} className={getSlideClass(index)}>
            <TeamCard
               imageSrc={team.imageSrc}
               name={team.name}
               position={team.position}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TeamCarousel;
