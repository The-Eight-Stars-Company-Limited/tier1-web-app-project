"use client";

import Image from "next/image";

function ProductCardsThree() {
    return (
        <>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          
          {/* Left Section: Product Image */}
          <div className="w-[100px] md:w-1/3 mb-8 md:mb-0 relative">
            <Image
              src="/images/products/build-image-1.jpeg"
              alt="Truncated Square"
              width={200}
              height={400}
              className="w-full h-auto rounded-[2rem] shadow-lg"
            />
          </div>

          {/* Right Section: Truncated background and text */}
          <div className="w-full md:w-1/3 relative flex items-center justify-center mx-auto">
            <div 
              className="
                relative 
                w-full h-[400px] 
                bg-cover bg-center 
                bg-[url('/helpers/truncated-square.svg')] 
                rounded-[2rem] 
                flex items-center justify-center 
                p-8
              "
            >
              <p className="text-lg font-poppins text-theme-blue  text-center leading-relaxed">
                Every item in our catalog meets high industry standards, ensuring durability, safety, and cost-effectiveness for your projects.
              </p>
            </div>
          </div>
        </div>
    </div>
        </>
    );
}

export default ProductCardsThree;