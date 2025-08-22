"use client"

import Image from 'next/image';
import FooterSection from '@/components/sections/FooterSection';
import ServiceCard from '@/components/shared/ServiceCard';

export default function Services() {
  return (
    <>
      <div className="h-[500px] w-full bg-white">
        <div className="relative w-[95%] h-[400px] mx-auto shadow-md mb-20">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero/hero-image-4.jpg"
              alt="Service Image"
              fill
              objectFit="cover"
              className=""
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="font-poppins text-3xl font-bold text-shadow-lg">
              Tailored services 
            </h2>
            <p className="font-poppins text-lg mt-2 text-shadow-lg">
              We provide services that are tailored to meet the needs of our clients.
              And help them achieve their project goals.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-20 mb-20 mx-auto w-full">
          <p className='font-poppins text-4xl font-semibold text-theme-blue/80 text-shadow-md'>Services We offer</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center w-[75%] max-w-6xl mx-auto mb-20">
          <ServiceCard
            number={1}
            imageSrc="/images/general/card-image-1.jpg"
            title="Consultation"
            description="We help you in making the right decisions for your project."
          />
          <ServiceCard
            number={2}
            imageSrc="/images/general/card-image-2.jpg"
            title="Design"
            description="We help you explore the right design choice for both architectural and interior design."
          />
          <ServiceCard
            number={3}
            imageSrc="/images/general/card-image-3.jpg"
            title="Labour"
            description="We provide you with the right labour for your project."
          />
          <ServiceCard
            number={4}
            imageSrc="/images/general/card-image-4.jpg"
            title="Production tools"
            description="We provide you with the right production tools for your project."
          />
        </div>
        <FooterSection />
      </div>
    </>
  );
}
