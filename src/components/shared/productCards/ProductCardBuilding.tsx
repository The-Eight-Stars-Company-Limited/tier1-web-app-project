"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ProductCardBuilding() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        bg-theme-yellow rounded-[32px] shadow-lg
        flex flex-col md:flex-row overflow-hidden
        w-full  md:h-[250px]
        mx-auto mb-20 max-w-6xl"
    >
      {/* Image on top (mobile), right (desktop) */}
      <div className="relative w-full md:w-1/2 h-[200px] md:h-full flex items-center justify-center">
        <Image
          src="/images/products/rm-blocks-2.png"
          alt="All Building Materials"
          layout="fill"
          objectFit="contain"
          className="object-contain"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-center items-start p-6 md:w-1/2 text-theme-blue">
        <p className="font-poppins text-xl font-semibold mb-2">
          All Building Materials
        </p>
        <p className="font-poppins text-sm max-w-[250px]">
          We offer a wide range of building materials to meet your needs.
        </p>
        <Button className="mt-4 w-[120px] rounded-full bg-white text-theme-blue font-poppins">
          View More
        </Button>
      </div>
    </motion.div>
  );
}

export default ProductCardBuilding;
