import { motion } from 'framer-motion';
import Image from 'next/image';

function ProductCardsOne() {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.0, delay: 0.6 }}
    >
      <div className="flex justify-center mx-auto px-8 gap-6 w-full mb-15">
        {/* Container for product cards */}
        <div className="flex flex-col md:flex-row gap-6 items-center w-full max-w-5xl mx-auto">
        
        {/* Rectangular Card */}
        <motion.div 
        whileHover={{ scale: 1.06 }}
        className="bg-theme-yellow rounded-[32px] shadow-lg w-[50%] h-[250px] flex overflow-hidden">
          {/* Text on the left */}
          <div className="flex-1 p-6 pr-0 flex flex-col justify-end">
            <p className="font-poppins text-xl font-semibold text-theme-blue">
              Concrete Blocks
            </p>
            <p className="font-poppins text-sm mt-0.5 text-theme-blue w-[185px]">
              Durable and high-quality blocks for your projects.
            </p>
            <button className='justify-self-start mt-4 w-[100px] text-theme-blue'>
              View More
            </button>
          </div>
          
          {/* Image on the right */}
          <div className="relative w-[70%] h-full flex items-center justify-center">
            <Image
              src="/images/products/rm-blocks-1.png"
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
              src="/images/products/build-image-1.jpeg"
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
              src="/images/products/build-image-2.jpeg"
              alt="Paver blocks"
              layout="fill"
              objectFit="cover"
              className="rounded-[20px]"
            />
          </div>
        </div>
       </div>
      </div>
    </motion.div>
  </>
  );
}

export default ProductCardsOne;