'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const images: string[] = [
  "/images/about/about-image-1.jpg",
  "/images/about/about-image-2.jpg",
  "/images/about/about-image-3.jpg"
];

const ImageSlider = () => {
  const [current, setCurrent] = useState<number>(0);

  const handleSlideChange = (index: number) => {
      setCurrent(index);
  };

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[350px] lg:h-[500px] flex items-center justify-center overflow-hidden my-[20px] rounded-[30px]">
      {images.map((img, index) => {
        const isActive = index === current;
        const isPrev = index === (current === 0 ? images.length - 1 : current - 1);
        const isNext = index === (current === images.length - 1 ? 0 : current + 1);

        const getTransformClass = () => {
          if (isActive) return "z-20 w-[60%] scale-100 opacity-100";
          if (isPrev) return "z-10 w-[40%] scale-[0.7] -translate-x-[85%] opacity-60";
          if (isNext) return "z-10 w-[40%] scale-[0.7] translate-x-[85%] opacity-60";
          return "z-0 scale-0 opacity-0"; 
        };

        return (
          <Image
            key={index}
            src={img}
            alt=''
            width={600}
            height={400}
            className={`
                absolute transition-all duration-500 rounded-[30px]
                ${getTransformClass()}
            `}
          />
        );
    })}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <span
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${current === index ? 'bg-white w-5' : 'bg-white/50'}
              cursor-pointer
            `}
            onClick={() => handleSlideChange(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;