"use client";

import Image from 'next/image';

interface ServiceCardProps {
  number: number;
  imageSrc: string;
  title: string;
  description: string;
}

function ServiceCard({ number, imageSrc, title, description }: ServiceCardProps) {
  return (
    <div className="relative w-[30%] h-[300px] bg-theme-blue rounded-[32px] shadow-xl">
      
      {/* Container for circular number at the top-left */}
      <div className="absolute top-[-10px] left-[-10px] z-10 flex items-center justify-center w-12 h-12 bg-theme-blue rounded-full shadow-lg">
        <span className="font-poppins text-lg font-bold text-theme-yellow">
          {number}
        </span>
      </div>
      
      {/* Image section */}
      <div className="relative w-full h-[70%]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          objectFit="cover"
          className="rounded-t-[32px]"
        />
      </div>

      {/* Text and Button section */}
      <div className='flex flex-row'>
      <div className="p-4 h-[100px] flex flex-col justify-between">
        <div>
          <h3 className="font-poppins text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="font-poppins text-sm text-gray-300">
            {description}
          </p>
        </div>
      </div>
      <div className='flex flex-1'>
        <button className="self-start text-theme-blue text-sm font-poppins 
          mt-8 ml-16 flex items-center cursor-pointer shadow-lg
          rounded-full bg-white px-4 py-2.5">
          <span>Read more</span>
        </button>
      </div>
      </div>
    </div>
  );
}

export default ServiceCard;