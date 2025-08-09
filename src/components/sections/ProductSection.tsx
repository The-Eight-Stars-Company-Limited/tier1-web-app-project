"use client";

import LineDrawing from "@/components/shared/LineDrawing";
import ProductCardsOne from "@/components/shared/productCards/ProductCardsOne";
import ProductCardsTwo from "@/components/shared/productCards/ProductCardsTwo";
import ProductCardsThree from "@/components/shared/productCards/ProductCardsThree";

function ProductSection() {
  return (
    <div className="bg-theme-blue/90 flex flex-col gap-10 mb-[0%] mx-auto px-4 w-full">
      <div className="inline-flex items-center justify-center px-[20px] py-[10px] font-poppins 
        text-lg text-white font-semibold m-auto border-2 border-white 
        w-[170px] h-[58px] rounded-full cursor-pointer mt-15
      ">
        Our Products
      </div>
      <div className="w-[52%] mx-auto text-center">
        <p className="text-white font-poppins text-xl mb-10 leading-8 text-shadow-md">
          Discover our extensive range of high-quality building and construction materials,
          including blocks, pipes, electricals, and more. <br />Our products are sourced from
          trusted manufacturers to ensure durability and reliability for all your projects.
        </p>
      </div>

      <LineDrawing />
      {/* What we Make Section */}
      <div className="mb-[7%]">
        <div className="flex justify-center mx-auto w-full mb-10">
          <p className='font-poppins text-4xl font-bold text-white text-shadow-lg'>
            What we Make
          </p>
        </div>
        
        {/* Product Cards */}
        <div>
          <ProductCardsOne />
          <ProductCardsTwo />
          <ProductCardsThree />
        </div>

        <LineDrawing />
      </div>
    </div>
  );
}

export default ProductSection;