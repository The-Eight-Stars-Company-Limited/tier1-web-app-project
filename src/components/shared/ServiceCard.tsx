"use client";

import Image from "next/image";

interface ServiceCardProps {
  number: number;
  imageSrc: string;
  title: string;
  description: string;
}

function ServiceCard({ number, imageSrc, title, description }: ServiceCardProps) {
  return (
    <div className="
      relative w-[85%] 
      bg-theme-blue rounded-[32px] 
      shadow-xl flex flex-col mb-10

      md:w-full 
      ">

      {/* Circular Number Badge */}
      <div className="absolute top-[-12px] left-[-12px] z-100 w-12 h-12 bg-theme-blue rounded-full flex items-center justify-center shadow-md">
        <span className="text-theme-yellow font-poppins font-bold text-lg">{number}</span>
      </div>

      {/* Image */}
      <div className="relative w-full h-[180px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-t-[32px]"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-4 flex-grow">
        <div>
          <h3 className="font-poppins text-lg font-semibold text-white mb-1">
            {title}
          </h3>
          <p className="font-poppins text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button
            className="
            flex justify-end items-center
            bg-white text-theme-blue text-sm 
            font-poppins font-medium 
            px-4 py-2 rounded-full shadow-md 
            hover:bg-gray-100 transition
            ml-20

            md:ml-12
            ">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
