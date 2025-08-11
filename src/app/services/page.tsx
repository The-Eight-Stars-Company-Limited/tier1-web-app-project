"use client"

import Image from 'next/image';
import FooterSection from '@/components/sections/FooterSection';
import ServiceCard from '@/components/shared/ServiceCard';

export default function Services() {
  return (
    <>
      <div className="h-[500px] w-full bg-white">
        <div className="relative w-[95%] h-[400px] mx-auto shadow-2xl rounded-b-[16px] mb-20">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero/hero-image-4.jpg"
              alt="Service Image"
              fill
              objectFit="cover"
              className="rounded-b-[15px]"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="font-poppins text-3xl font-bold text-shadow-lg">
              Our Services
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
        <div>
          <div className="mt-10 flex justify-center flex-row mx-auto gap-14 mb-20">
            <ServiceCard
              number={1}
              imageSrc="/images/general/card-image-1.jpg"
              title="Service 1"
              description="Description for Service 1"
            />
            <ServiceCard
              number={2}
              imageSrc="/images/general/card-image-2.jpg"
              title="Service 2"
              description="Description for Service 2"
            />
          </div>
          <div className="mt-10 flex justify-center flex-row mx-auto gap-14 mb-20">
            <ServiceCard
              number={1}
              imageSrc="/images/general/card-image-3.jpg"
              title="Service 1"
              description="Description for Service 1"
            />
            <ServiceCard
              number={2}
              imageSrc="/images/general/card-image-4.jpg"
              title="Service 2"
              description="Description for Service 2"
            />
          </div>
        </div>
        <FooterSection />
      </div>
    </>
  );
}