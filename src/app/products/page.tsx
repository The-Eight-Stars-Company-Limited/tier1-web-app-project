"use client"

import Image from 'next/image';
import FooterSection from '@/components/sections/FooterSection';
import RectangularCard from '@/components/shared/RectangularCard';

export default function Products() {
  return (
    <>
      <div className="h-[500px] w-full bg-white">
        <div className="relative w-[95%] h-[400px] mx-auto shadow-2xl rounded-b-[16px] mb-20">
          <div className="relative h-full w-full">
            <Image
              src="/images/general/services-2.png"
              alt="Service Image"
              fill
              objectFit="cover"
              className="rounded-b-[16px]"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="font-poppins text-3xl font-bold text-shadow-lg">
              Our Products
            </h2>
            <p className="font-poppins text-lg mt-2 text-shadow-lg">
              We provide services that are tailored to meet the needs of our clients.
              And help them achieve their project goals.
            </p>
          </div>     
        </div>
        <div>
          <div className="mt-10 mb-10 flex justify-center items-center mx-auto w-full gap-10">
            <RectangularCard src="/images/products/rm-blocks-1.png" />
            <RectangularCard src="/images/products/rm-blocks-1.png" />
          </div>
          <div className="mt-10 mb-10 flex justify-center items-center mx-auto w-full gap-10">
            <RectangularCard src="/images/products/rm-blocks-1.png" />
            <RectangularCard src="/images/products/rm-blocks-1.png" />
          </div>
          <div className="mt-10 mb-30 flex justify-center items-center mx-auto w-full gap-10">
            <RectangularCard src="/images/products/rm-blocks-1.png" />
            <RectangularCard src="/images/products/rm-blocks-1.png" />
          </div>
        </div>
        <FooterSection />
      </div>
    </>
  );
}