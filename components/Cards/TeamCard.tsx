import Image from 'next/image';
import React from 'react';

type TeamCardProps = {
 name: string;
  imageSrc: string;
  position: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, position }) => {
  return (
    <div className="w-full rounded overflow-hidden cursor-pointer mt-5 flex flex-col items-center justify-center  ">
      <Image
        src={imageSrc}
        alt={name}
        width={400}
        height={250}
        className="w-full md:h-64 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
