import { motion } from "framer-motion";
import Image from "next/image";
import ProductDialogBtn from "./ProductDialogBtn";
import ProductDialogCard from "./ProductDialogCard";

function ProductCardsOne() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mx-auto px-4 w-full mb-15 max-w-6xl"
      >
        {/* Grid container for all three cards */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6 w-full">

          {/* Rectangular Card */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="bg-theme-yellow rounded-[32px] shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image on top on mobile, left on desktop */}
            <div className="relative w-full h-[220px] md:h-auto md:w-[50%] flex-shrink-0">
              <Image
                src="/images/products/rm-blocks-1.png"
                alt="Concrete Blocks"
                layout="fill"
                objectFit="contain"
                className="object-contain"
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center p-6 md:w-[50%] text-theme-blue">
              <p className="font-poppins text-xl font-semibold">Pavement Blocks</p>
              <p className="font-poppins text-sm mt-1 w-full max-w-xs">
                Durable and high-quality blocks for your projects.
              </p>

              <ProductDialogBtn
                title="Concrete Blocks"
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
          </motion.div>

          {/* First Square Card */}
          <div className="bg-theme-yellow rounded-[32px] shadow-lg 
            overflow-hidden flex items-center justify-center p-4 h-[250px]
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
          <div className="bg-theme-yellow rounded-[32px] shadow-lg 
            overflow-hidden flex items-center justify-center p-4 h-[250px]
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
      </motion.div>
    </>
  );
}

export default ProductCardsOne;
