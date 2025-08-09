"use client";

import Image from "next/image";

function ServicesSection() {
  return (
    <>
      <div className="inline-flex items-center justify-center px-[20px] py-[5px] font-poppins 
        text-lg text-[#072C8B] font-semibold m-auto border-2 border-[#072C8B] 
        w-[170px] h-[60px] rounded-full mt-5
        ">
        Our Services
      </div>
      <p className="text-[#072C8B] font-poppins text-xl mb-10 leading-8 
        text-shadow-sm text-center w-[52%] mx-auto
        ">
        We provide services that are tailored to meet the needs of our clients.
        And help them achieve their project goals
      </p>
      <div className="w-full mb-60">
        <div className="relative w-[75%] h-[350px] mx-auto shadow-2xl rounded-[16px]">
          <div className="relative h-full w-full">
            <Image
              src="/images/general/services-2.png"
              alt="Service Image"
              fill
              objectFit="cover"
              className="rounded-[15px]"
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
      </div>
    </>
  );
}

export default ServicesSection;
