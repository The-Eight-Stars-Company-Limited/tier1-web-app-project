'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const images: string[] = [
  "/images/about/about-image-1.jpg",
  "/images/about/about-image-2.jpg",
  "/images/about/about-image-3.jpg"
];

const ImageSLider = () => {
  const [current, setCurrent] = useState<number>(0);

  const handleSlideChange = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-visible py-6 sm:py-8 my-6 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">

      {images.map((img, index) => {
        const isActive = index === current;
        const isPrev = index === (current === 0 ? images.length - 1 : current - 1);
        const isNext = index === (current === images.length - 1 ? 0 : current + 1);

        const getTransformClass = () => {
          if (isActive) return "z-20 w-[70%] sm:w-[65%] md:w-[60%] scale-100 opacity-100";
          if (isPrev) return "z-10 w-[40%] scale-[0.6] sm:scale-[0.7] -translate-x-[70%] sm:-translate-x-[90%] opacity-50";
          if (isNext) return "z-10 w-[40%] scale-[0.6] sm:scale-[0.7] translate-x-[70%] sm:translate-x-[90%] opacity-50";
          return "z-0 scale-0 opacity-0";
        };

        return (
          <Image
            key={index}
            src={img}
            alt={`About Image ${index + 1}`}
            width={600}
            height={400}
            className={`
              absolute transition-all duration-500 ease-in-out object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]
              ${getTransformClass()}
            `}
          />
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <span
            key={index}
            className={`
              h-2 w-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer
              ${current === index ? 'bg-white w-5' : 'bg-white/40'}
            `}
            onClick={() => handleSlideChange(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSLider;
