"use client";


import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

type ProductItem = {
  text: string;
  img: string;
  category: string;
};

// Create an array of 5 objects, adhering to the ProductItem type.
const products: ProductItem[] = [
  {
    text: "Elegant Leather Satchel",
    img: "/images/general/img-1.jpg",
    category: "Bags",
  },
  {
    text: "Noise-Cancelling Headphones",
    img: "/images/general/img-8.jpg",
    category: "Electronics",
  },
  {
    text: "Organic Cotton T-Shirt",
    img: "/images/general/img-13.jpg",
    category: "Apparel",
  },
  {
    text: "Stainless Steel Water Bottle",
    img: "/images/general/img-4.jpg",
    category: "Home Goods",
  },
  {
    text: "Ergonomic Office Chair",
    img: "/images/general/img-6.jpg",
    category: "Furniture",
  },
];


const Gallery = () => {

      const router = useRouter();

      const handleViewMore = () => {
        router.push('/gallery');
      };
  return (

    <div className='bg-theme-blue/90 flex flex-col gap-10 mb-[0%] mx-auto px-4 w-full'>
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
        Our Gallery
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
          Capturing Visions in Concrete and Steel.
        </p>
      </div>
      <div className=" w-full h-[700px] grid grid-cols-3 grid-rows-2 gap-5 px-20">
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${index === 0 ? 'row-span-2' : ''}`}
          >
            <Image
              src={product.img}
              alt={product.text}
              width={200}
              height={200}
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
        ))}
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
            View More Gallery
          </Button>
        </div>
    </div>

  )
}

export default Gallery