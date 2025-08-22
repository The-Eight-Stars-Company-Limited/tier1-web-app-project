"use client";

import LineDrawing from "@/components/shared/LineDrawing";
import ProductCardsOne from "@/components/shared/productCards/ProductCardsOne";
import ProductCardsTwo from "@/components/shared/productCards/ProductCardsTwo";
import ProductCardsThree from "@/components/shared/productCards/ProductCardsThree";
import ProductCardBuilding from "@/components/shared/productCards/ProductCardBuilding";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation';

function ProductSection() {
  const router = useRouter();

  const handleViewMore = () => {
    router.push('/products');
  };

  return (
    <div className="bg-theme-blue/90 flex flex-col gap-10 mb-[0%] mx-auto px-4 w-full">
      <div className="
        inline-flex items-center justify-center 
        px-3 py-3
        font-poppins m-auto border-2 border-white
        w-[130px] h-[45px] 
        rounded-full cursor-pointer mt-15
        text-sm text-white font-semibold shadow-md
        
        md:text-base
        md:w-[150px] md:h-[50px] md:mb-3
        md:shadow-lg
        md:text-white md:font-semibold
      ">
        Our Products
      </div>
      <div className="
        w-[95%]flex font-poppins
        text-white text-base text-shadow-sm text-center
        mb-10 leading-7
        justify-center items-center mx-auto 
        
        md:text-center md:text-xl
        md:w-[52%] md:leading-8
        ">
        <p>
          Discover our extensive range of high-quality building and construction materials,
          including blocks, pipes, electricals, and more. Our products are sourced from
          trusted manufacturers to ensure durability and reliability for all your projects
        </p>
      </div>

      <LineDrawing />
      {/* What we Make Section */}
      <div className="mb-[7%]">
        <div className="flex justify-center mx-auto w-full mb-10">
          <p className='
            font-poppins font-semibold
            text-white text-2xl text-shadow-lg

            md:text-4xl md:font-bold
            '>
            What we Make
          </p>
        </div>

        {/* Product Cards */}
        <div>
          <p className="
          md:hidden flex justify-center mx-auto 
          font-poppins text-white text-lg mb-10
          ">
            1. Pavement Blocks
          </p>
          <ProductCardsOne />
          <p className="
          md:hidden flex justify-center mx-auto 
          font-poppins text-white text-lg mb-10 mt-10
          ">
            2. Concrete Blocks
          </p>
          <ProductCardsTwo />
          <p className="
          md:hidden flex justify-center mx-auto 
          font-poppins text-white text-lg mb-10 mt-10
          ">
            3. Electricals
          </p>
          <ProductCardsThree />
          <p className="
          md:hidden flex justify-center mx-auto 
          font-poppins text-white text-lg mb-10 mt-10
          ">
            4. Building Materials
          </p>
          <ProductCardBuilding />
        </div>
        <div className="flex justify-center mx-auto w-full mb-15">
          <Button 
            onClick={handleViewMore}
            className="
            bg-transparent text-theme-yellow font-poppins 
            rounded-[36px] shadow-md h-[45px]
            ring-3 ring-theme-yellow

            hover:bg-white/50 hover:text-theme-yellow
            active:bg-theme-yellow active:text-white
            cursor-pointer
            transition-colors duration-200
            ">
            View More Products
          </Button>
        </div>

        <LineDrawing />
      </div>
    </div>
  );
}

export default ProductSection;
