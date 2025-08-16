"use client";

import Image from "next/image";
import ServiceCard from "../shared/ServiceCard";
import { motion } from "framer-motion";

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

      <div className="w-full mb-40">
        {/* Image Section for Services with Text Overlay */}
        <div className="relative w-[75%] h-[350px] mx-auto shadow-2xl rounded-[16px] mb-20">
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

        {/* Service Cards */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center w-[75%] max-w-6xl mx-auto"
          >
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
           <ServiceCard
            number={3}
            imageSrc="/images/general/card-image-3.jpg"
            title="Service 3"
            description="Description for Service 3"
          />
          <ServiceCard
            number={4}
            imageSrc="/images/general/card-image-4.jpg"
            title="Service 4"
            description="Description for Service 4"
          />
        </motion.div>
      </div>
    </>
  );
}

export default ServicesSection;
