"use client";

import Image from "next/image";
import ServiceCard from "../shared/ServiceCard";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { Button } from "../ui/button";

function ServicesSection() {
  const router = useRouter();

  const handleViewMore = () => {
    router.push('/services');
  };
  return (
    <>
      <div className="
        inline-flex items-center justify-center
        font-semibold font-poppins
        px-[20px] py-[6px] 
        text-sm text-[#072C8B] 
        m-auto border-2 border-[#072C8B]
        w-[145px] h-[50px] rounded-full mt-5
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

        md:w-[75%] md:text-shadow-sm 
        md:text-xl md:leading-8
        ">
        We provide comprehensive building and construction solutions designed to meet the 
        unique needs of each client. 
        From expert consultation and custom pavement 
        and concrete block designs to skilled labour and quality building materials, 
        we ensure every project is delivered with precision and care. Our goal is to help you achieve 
        lasting results and bring your construction vision to life.
      </p>

      <div className="w-full mb-15">
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
            <h3 className="font-poppins text-2xl font-bold text-shadow-lg">
              Services
            </h3>
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
        </motion.div>
      </div>
      <div className="flex justify-center mx-auto w-full mb-15">
        <Button 
          onClick={handleViewMore}
          className="
          bg-transparent text-theme-yellow font-poppins 
          rounded-[36px] shadow-md h-[45px]
          ring-3 ring-theme-yellow

          hover:bg-gray-100 hover:text-theme-yellow
          active:bg-theme-yellow active:text-white
          cursor-pointer
          transition-colors duration-200
          ">
          View More Services
        </Button>
      </div>
    </>
  );
}

export default ServicesSection;
