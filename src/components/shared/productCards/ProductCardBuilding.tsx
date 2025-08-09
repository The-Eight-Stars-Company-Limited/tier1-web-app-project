"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ProductCardBuilding() {
    return (
      <>
      <motion.div 
          whileHover={{ scale: 1.06 }}
          className="
          bg-theme-yellow rounded-[32px] shadow-lg w-[50%] h-[250px] 
            flex overflow-hidden mx-auto mb-15 pb-10 mt-22">
            {/* Text on the left */}
            <div className="flex-1 p-6 pr-0 flex flex-col justify-end">
              <p className="font-poppins text-xl font-semibold text-theme-blue">
                All Building Materials
              </p>
              <p className="font-poppins text-sm mt-0.5 text-theme-blue w-[250px]">
                We offer a wide range of building materials to meet your needs.
              </p>
              <Button 
                className='
                justify-self-start mt-4 w-[100px] text-theme-blue bg-white
                rounded-full cursor-pointer font-poppins
                '>
                View More
              </Button>
            </div>
              
            {/* Image on the right */}
            <div className="relative w-[50%] h-full flex items-center justify-center pr-4">
              <Image
                src="/images/products/rm-blocks-2.png"
                alt="Concrete Blocks"
                objectFit="contain"
                width={320}
                height={320}
              />
            </div>
          </motion.div>
      </>
    );
}

export default ProductCardBuilding;

