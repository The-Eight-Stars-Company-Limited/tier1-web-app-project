"use client";

import Image from "next/image";

type RectangularCardProps = {
  src: string;
  className?: string;
  title: string;
  description: string; 
};

function RectangularCard({ src, className, title, description }: RectangularCardProps) {
  return (
    <>
      <div className={`bg-theme-yellow rounded-[32px] shadow-lg h-[250px] flex overflow-hidden ${className}`}>
        <div className="flex-1 p-6 pr-0 flex flex-col justify-end">
          <p className="font-poppins text-xl font-semibold text-theme-blue">
            {title}
          </p>
          <p className="font-poppins text-sm mt-0.5 text-theme-blue w-[185px]">
            {description}
          </p>
        </div>
        
        {/* Image  */}
        <div className="relative w-[70%] h-full flex items-center justify-center">
          <Image
            src={src}
            alt="Concrete Blocks"
            objectFit="contain"
            width={320}
            height={320}
          />
        </div>
      </div>
    </>
  );
}

export default RectangularCard;