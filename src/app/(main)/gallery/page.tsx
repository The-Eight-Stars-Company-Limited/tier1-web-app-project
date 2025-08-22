"use client"

import FooterSection from '@/components/sections/FooterSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type ProductItem = {
  text: string;
  img: string;
  category: string;
};

// Reordered array by category
const products: ProductItem[] = [
  // Bags
  { text: "Elegant Leather Satchel", img: "/images/general/img-1.jpg", category: "Bags" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-29.jpg", category: "Bags" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-3.jpg", category: "Bags" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-4.jpg", category: "Bags" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-5.jpg", category: "Bags" },

  // Apparel
  { text: "Organic Cotton T-Shirt", img: "/images/general/img-6.jpg", category: "Apparel" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-7.jpg", category: "Apparel" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-8.jpg", category: "Apparel" },

  // Home Goods
  { text: "Stainless Steel Water Bottle", img: "/images/general/img-9.jpg", category: "Home Goods" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-20.jpg", category: "Home Goods" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-21.jpg", category: "Home Goods" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-12.jpg", category: "Home Goods" },

  // Electronics
  { text: "Noise-Cancelling Headphones", img: "/images/general/img-13.jpg", category: "Electronics" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-14.jpg", category: "Electronics" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-15.jpg", category: "Electronics" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-16.jpg", category: "Electronics" },

  // Furniture
  { text: "Ergonomic Office Chair", img: "/images/general/img-17.jpg", category: "Furniture" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-18.jpg", category: "Furniture" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-19.jpg", category: "Furniture" },
  { text: "Ergonomic Office Chair", img: "/images/general/img-20.jpg", category: "Furniture" },
];

export default function Gallery() {
  const [category, setCategory] = useState<string>('all');

  // Filtered products
  const filteredProducts = category === 'all'
    ? products
    : products.filter((product) => product.category === category);

  return (
    <>
      <div className="w-full bg-white">
        {/* Hero Section */}
        <div className="relative w-[95%] h-[400px] mx-auto shadow-md rounded-b-[16px] mb-10">
          <Image
            src="/images/products/build-image-3.jpg"
            alt="Service Image"
            fill
            objectFit="cover"
            className=""
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
            <h2 className="font-poppins text-3xl font-bold text-shadow-lg">
              Our Gallery
            </h2>
            <p className="font-poppins text-lg mt-2 text-shadow-lg">
              We provide services that are tailored to meet the needs of our clients.
              And help them achieve their project goals.
            </p>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex justify-center items-center mt-20 mx-auto w-full">
          <p className='font-poppins text-4xl font-semibold text-theme-blue/80 text-shadow-md'>
            Gallery
          </p>
        </div>

        {/* Category */}
        <div className="hidden md:flex justify-center items-center mt-20 gap-4 w-full">
          <Button
            className="bg-blue-800/90 font-poppins text-md text-white rounded-full py-3 px-4 h-[46px] shadow-xl"
            onClick={() => setCategory('all')}
          >
            All
          </Button>
          <Button
            className="bg-blue-800/90 font-poppins text-md text-white rounded-full py-3 px-4 h-[46px] shadow-xl"
            onClick={() => setCategory('Bags')}
          >
            Bags
          </Button>
          <Button
            className="bg-blue-800/90 font-poppins text-md text-white rounded-full py-3 px-4 h-[46px] shadow-xl"
            onClick={() => setCategory('Apparel')}
          >
            Apparel
          </Button>
          <Button
            className="bg-blue-800/90 font-poppins text-md text-white rounded-full py-3 px-4 h-[46px] shadow-xl"
            onClick={() => setCategory('Home Goods')}
          >
            Home Goods
          </Button>
          <Button
            className="bg-blue-800/90 font-poppins text-md text-white rounded-full py-3 px-4 h-[46px] shadow-xl"
            onClick={() => setCategory('Electronics')}
          >
            Electronics
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-5 px-20 my-15">
          {filteredProducts.map((product, index) => (
            <div key={index} className="wrap flex items-center justify-center md:h-[400px]">
              <Image
                src={product.img}
                alt={product.text}
                width={400}
                height={400}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
          ))}
        </div>

        <FooterSection />
      </div>
    </>
  );
}
