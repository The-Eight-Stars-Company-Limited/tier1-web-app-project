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
        
          <div className="
            flex flex-col items-center gap-10
            md:grid md:grid-cols-2 md:gap-10 px-10
            mt-10 mb-30 mx-auto w-full md:px-20
            ">
            {/* Only show the first three cards on mobile */}
            <RectangularCard src="/images/products/rm-blocks-1.png" />
            <RectangularCard src="/images/products/rm-blocks-1.png" />
            <RectangularCard src="/images/products/rm-blocks-1.png" />
            
            {/* These cards will be hidden on mobile */}
            <RectangularCard 
              className="hidden" 
              src="/images/products/rm-blocks-1.png" 
            />
            <RectangularCard 
              className="hidden" 
              src="/images/products/rm-blocks-1.png" 
            />
            <RectangularCard 
              className="hidden" 
              src="/images/products/rm-blocks-1.png" 
            />
          </div>
        
        <FooterSection />
      </div>
    </>
  );
}
