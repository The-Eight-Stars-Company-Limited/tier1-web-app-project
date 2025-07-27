import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const images: string[] = ["/assets/images/about-image-1.jpg", "/assets/images/about-image-2.jpg", "/assets/images/about-image-1.jpg"];


const ImageSLider = () => {

    const [current, setCurrent] = useState<number>(0);

    const handleSlideChange = (index:number) => {
        setCurrent(index)
    };


    useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">
        {images.map((img, index) => {
            const isActive = index === current % images.length;
            const isPrev = index === (current - 1) % images.length;
            const isNext = index === (current + 1) % images.length;

            return (
            <img
                key={index}
                src={img}
                className={`
                absolute transition-all duration-500 rounded-[30px]
                ${isActive ? "z-15 w-[40%] scale-100" : "z-10 w-[20%] scale-150 opacity-60"}
                ${isPrev ? "-translate-x-[120%]" : ""}
                ${isNext ? "translate-x-[120%]" : ""}
                `}
            />
            );
        })}

        <div className=" w-full h-[200px] flex gap-1 absolute bottom-[-20%] md:bottom-[-25%] right-[-49%] z-50 ">
            {images.map((_, index) => (
            <span
                key={index}
                className={` w-[10px] h-[10px] bg-[white] rounded-full cursor-pointer
                    ${current === index ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
            ></span>
            ))}
        </div>

    </div>

  )
}

export default ImageSLider
