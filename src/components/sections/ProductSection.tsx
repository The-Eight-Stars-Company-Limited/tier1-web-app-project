"use client";

import LineDrawing from "@/components/shared/LineDrawing";
import ProductCards from "@/components/shared/ProductCard";

function ProductSection() {
  return (
    <div className="bg-theme-blue/90 flex flex-col gap-10 mb-[7%] mx-auto px-4 w-full">
      <div className="inline-flex items-center justify-center px-[20px] py-[10px] font-poppins 
        text-lg text-white font-semibold m-auto border-2 border-white 
        w-[170px] h-[58px] rounded-full cursor-pointer mt-15
      ">
        Our Products
      </div>
      <div className="w-[52%] mx-auto text-center">
        <p className="text-white font-poppins text-xl mb-10 leading-8">
          Discover our extensive range of high-quality building and construction materials,
          including blocks, pipes, electricals, and more. <br />Our products are sourced from
          trusted manufacturers to ensure durability and reliability for all your projects.
        </p>
      </div>

      <LineDrawing />

      <ProductCards />
    </div>
  );
}

export default ProductSection;