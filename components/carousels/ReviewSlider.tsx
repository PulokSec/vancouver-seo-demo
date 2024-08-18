'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface Review {
  name: string;
  title: string;
  content: string;
  location: string;
  company: string;
  imageUrl: string;
}

const reviews: Review[] = [
  {
    name: 'Yuri Amsellem',
    title: 'Game-Changer for Growth',
    content: 'This is to recommend Ranking By SEO India as a reliable and professional company. They have been handling all our search engine optimization matters for a long time, and have always been very helpful and efficient.',
    location: 'USA',
    company: 'cateringofparis.com',
    imageUrl: 'https://www.rankingbyseo.com/wp-content/uploads/2024/05/hanan-nagi-1.png',
  },
  {
    name: 'John Doe',
    title: 'Excellent Service',
    content: 'Ranking By SEO India has provided us with excellent service and results. They are professional and very knowledgeable in their field.',
    location: 'UK',
    company: 'example.com',
    imageUrl: 'https://www.rankingbyseo.com/wp-content/uploads/2023/08/mainimage-276x300.png',
  },
  {
    name: 'Jane Smith',
    title: 'Highly Recommended',
    content: 'I highly recommend Ranking By SEO India for their SEO services. They have helped our business grow significantly.',
    location: 'Canada',
    company: 'business.ca',
    imageUrl: 'https://www.rankingbyseo.com/wp-content/uploads/2023/08/yuri-ylo-grey-276x300.png',
  },
];

const awards = [
  { src: 'https://www.rankingbyseo.com/wp-content/uploads/2024/05/2-2-300x300.png', alt: 'Google Partner' },
  { src: 'https://www.rankingbyseo.com/wp-content/uploads/2024/05/2-2-300x300.png', alt: 'Hindustan Times' },
  { src: 'https://www.rankingbyseo.com/wp-content/uploads/2024/05/2-2-300x300.png', alt: 'SEMrush' },
  { src: 'https://www.rankingbyseo.com/wp-content/uploads/2024/05/2-2-300x300.png', alt: 'HuffPost' },
  { src: 'https://www.rankingbyseo.com/wp-content/uploads/2024/05/2-2-300x300.png', alt: 'Entrepreneur' },
  { src: 'https://www.rankingbyseo.com/wp-content/uploads/2024/05/2-2-300x300.png', alt: 'Outlook' },
];

const ReviewSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mt-2">India's Leading SEO Company Since 2010</h2>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={prevReview} className="text-gray-600 hover:text-gray-800 mx-2">❮</button>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center md:flex-row">
          <img src={reviews[currentIndex].imageUrl} alt={reviews[currentIndex].name} className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-4" />
          <div>
            <p className="text-lg font-semibold text-gray-800">{reviews[currentIndex].name} <span className="font-normal">says,</span></p>
            <p className="text-xl font-bold text-red-600">"{reviews[currentIndex].title}"</p>
            <p className="text-gray-600 mt-2">{reviews[currentIndex].content}</p>
            <p className="text-gray-800 mt-2">{reviews[currentIndex].location} | <a href={`http://${reviews[currentIndex].company}`} className="text-red-600">{reviews[currentIndex].company}</a></p>
          </div>
        </div>
        <button onClick={nextReview} className="text-gray-600 hover:text-gray-800 mx-2">❯</button>
      </div>
      <div className="flex justify-center mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#00C2CC]' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
