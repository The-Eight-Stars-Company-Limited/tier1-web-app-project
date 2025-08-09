import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductDialogBtn from './ProductDialogBtn';
import ProductDialogCard from './ProductDialogCard';

function ProductCardsThree() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mx-auto px-8 gap-6 h-full w-full mb-15">
        {/* Container for product cards */}
        <div className="flex flex-col md:flex-row gap-6 items-center w-full max-w-5xl mx-auto">
        
        {/* Rectangular Card */}
        <motion.div 
          whileHover={{ scale: 1.06 }}
          className="bg-theme-yellow rounded-[32px] shadow-lg w-[50%] h-[250px] flex overflow-hidden">
          {/* Text on the left */}
          <div className="flex-1 p-6 pr-0 flex flex-col justify-end">
            <p className="font-poppins text-xl font-semibold text-theme-blue">
              Electricals
            </p>
            <p className="font-poppins text-sm mt-0.5 text-theme-blue w-[185px]">
              Sustainable Electricals for your buildings
            </p>
            <ProductDialogBtn 
              title="Electricals" 
              description="Explore our range of high-quality concrete blocks."
            >
              <div className="grid grid-cols-2 gap-4 mt-4">
                  <ProductDialogCard 
                    src="/images/products/build-image-1.jpeg" 
                    alt="Building a wall"
                    title="Residential Walls"
                  />
                  <ProductDialogCard 
                    src="/images/products/build-image-2.jpeg" 
                    alt="Pavement blocks"
                    title="Walkways & Patios"
                  />
                  <ProductDialogCard 
                    src="/images/products/build-image-1.jpeg" 
                    alt="Garden design"
                    title="Garden Borders"
                  />
                  <ProductDialogCard 
                    src="/images/products/build-image-2.jpeg" 
                    alt="Commercial building"
                    title="Commercial Foundations"
                  />
                </div>
           </ProductDialogBtn>
          </div>
          
          {/* Image on the right */}
          <div className="relative w-[70%] h-full flex items-center justify-center">
            <Image
              src="/images/products/rm-electricals.png"
              alt="Concrete Blocks"
              objectFit="contain"
              width={320}
              height={320}
            />
          </div>
        </motion.div>
        
        {/* First Square Card */}
        <div 
        className="
          bg-theme-yellow rounded-[32px] shadow-lg w-[25%] h-[250px] 
          overflow-hidden flex items-center justify-center p-4
          ">
          <div className="relative w-full h-full">
            <Image
              src="/images/products/build-image-3.jpg"
              alt="Pavement Blocks"
              layout="fill"
              objectFit="cover"
              className="rounded-[20px]"
            />
          </div>
        </div>

        {/* Second Square Card */}
        <div 
        className="
        bg-theme-yellow rounded-[32px] shadow-lg w-[25%] h-[250px] 
          overflow-hidden flex items-center justify-center p-4
          ">
          <div className="relative w-full h-full">
            <Image
              src="/images/products/build-image-4.jpg"
              alt="Paver blocks"
              layout="fill"
              objectFit="cover"
              className="rounded-[20px]"
            />
          </div>
        </div>
       </div>
      </motion.div>
    </>
  );
}

export default ProductCardsThree;