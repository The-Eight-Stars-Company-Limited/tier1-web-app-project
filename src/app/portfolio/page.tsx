"use client"

import FooterSection from '@/components/sections/FooterSection';
import Image from 'next/image';
import SquareCard from '@/components/shared/SquareCard';

export default function Portfolio() {
  return (
    <>
      <div className="h-[500px] w-full bg-white">
        <div className="relative w-[95%] h-[400px] mx-auto shadow-2xl rounded-b-[16px] mb-10">
          <div className="relative h-full w-full">
            <Image
              src="/images/general/card-image-2.jpg"
              alt="Service Image"
              fill
              objectFit="cover"
              className="rounded-b-[16px]"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="font-poppins text-3xl font-bold text-shadow-lg">
              Our Portfolio
            </h2>
            <p className="font-poppins text-lg mt-2 text-shadow-lg">
              We provide services that are tailored to meet the needs of our clients.
              And help them achieve their project goals.
            </p>
          </div>     
        </div>
        <div className="flex justify-center items-center mt-20 mx-auto w-full">
          <p className='font-poppins text-4xl font-semibold text-theme-blue/80 text-shadow-md'>Projects</p>
        </div>

        {/* Projects */}
        <div>
          <div className="mt-10 mb-20 bg-white mx-auto flex justify-center items-center gap-10">
            <SquareCard src="/images/products/build-image-1.jpeg" />
            <SquareCard src="/images/products/build-image-4.jpg" />
            <SquareCard src="/images/products/build-image-3.jpg" />
          </div>
          <div className="mt-10 mb-20 bg-white mx-auto flex justify-center items-center gap-10">
            <SquareCard src="/images/products/build-image-4.jpg" />
            <SquareCard src="/images/products/build-image-2.jpeg" />
            <SquareCard src="/images/products/build-image-1.jpeg" />
          </div>
        </div>
        <FooterSection />
      </div>
    </>
  );
}