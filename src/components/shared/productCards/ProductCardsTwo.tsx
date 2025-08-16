"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ProductCardsTwo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center mx-auto px-4 w-full mb-20 max-w-6xl"
      >
        {/* Grid container: 1 column mobile, 3 columns desktop with rectangle taking 2/4 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-6 w-full">

          {/* First Square Card */}
          <div className="max-sm:order-3 bg-theme-yellow rounded-[32px] shadow-lg overflow-hidden flex items-center justify-center p-4 h-[250px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/products/build-image-1.jpeg"
                alt="Pavement Blocks"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px]"
              />
            </div>
          </div>

          {/* Second Square Card */}
          <div className="max-sm:order-2 bg-theme-yellow rounded-[32px] shadow-lg overflow-hidden flex items-center justify-center p-4 h-[250px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/products/build-image-2.jpeg"
                alt="Paver blocks"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px]"
              />
            </div>
          </div>

          {/* Rectangular Card */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="max-sm:order-1 bg-theme-yellow rounded-[32px] shadow-lg overflow-hidden flex flex-col order-1 md:flex-row"
          >
            {/* Image on top on mobile, left on desktop */}
            <div className="relative w-full h-[180px] md:h-auto md:w-1/2 flex-shrink-0">
              <Image
                src="/images/products/rm-blocks-2.png"
                alt="Concrete Blocks"
                layout="fill"
                objectFit="contain"
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center p-6 md:w-1/2 text-theme-blue">
              <p className="font-poppins text-xl font-semibold">Concrete Blocks</p>
              <p className="font-poppins text-sm mt-1 w-full max-w-xs">
                Durable and high-quality blocks for your projects.
              </p>
              <Button className="mt-4 w-[100px] rounded-full bg-white text-theme-blue font-poppins cursor-pointer">
                View More
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default ProductCardsTwo;

