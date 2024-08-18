import React from 'react';
import Image from 'next/image';

const SeoBackground: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-blue-700 to-blue-600 bg-repeat">
      {/* Foreground Image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://vancouverseo.com/wp-content/uploads/2021/11/BG-HomePage-High.png"
          alt="SEO Foreground Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default SeoBackground;
