"use client";

import Image from "next/image";
import ServiceCard from "../shared/ServiceCard";
import { motion } from "framer-motion";

function ServicesSection() {
  return (
    <>
      <div className="
        inline-flex items-center justify-center
        font-semibold font-poppins
        px-[20px] py-[6px] 
        text-sm text-[#072C8B] 
        m-auto border-2 border-[#072C8B]
        w-[135px] h-[50px] rounded-full mt-5
        shadow-md

        md:w-[170px] md:h-[60px]
        md:text-lg
        md:px-[20px] md:py-[5px]
        ">
        Our Services
      </div>
      <p className="
        text-[#072C8B] font-poppins text-lg mb-10 leading-7
        text-shadow-sm text-center w-[90%] mx-auto

        md:w-[52%] md:text-shadow-sm 
        md:text-xl md:leading-8
        ">
        We provide services that are tailored to meet the needs of our clients.
        And help them achieve their project goals
      </p>

      <div className="w-full mb-20">
        {/* Image Section for Services with Text Overlay */}
        <div className="
          relative w-[95%] h-[350px] mx-auto 
          shadow-2xl 
          mb-20

          md:w-[90%] md:h-[400px]
          ">
          <div className="relative h-full w-full">
            <Image
              src="/images/general/services-2.png"
              alt="Service Image"
              fill
              objectFit="cover"
              className=" rounded-[5px] md:rounded-[15px]"
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
          className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 
          justify-items-center w-[75%] max-w-6xl mx-auto
          ">
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
