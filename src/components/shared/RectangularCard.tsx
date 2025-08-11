
"use client";

import Image from "next/image";

function RectangularCard( { src }: { src: string }) {
  return (
    <>
      <div className="bg-theme-yellow rounded-[32px] shadow-lg w-[40%] h-[250px] flex overflow-hidden">
          {/* Text on the left */}
          <div className="flex-1 p-6 pr-0 flex flex-col justify-end">
            <p className="font-poppins text-xl font-semibold text-theme-blue">
              Pavement Blocks
            </p>
            <p className="font-poppins text-sm mt-0.5 text-theme-blue w-[185px]">
              Durable and high-quality blocks for your projects.
            </p>
          </div>
          
          {/* Image on the right */}
          <div className="relative w-[70%] h-full flex items-center justify-center">
            <Image
              src={src}
              alt="Concrete Blocks"
              objectFit="contain"
              width={320}
              height={320}
            />
          </div>
        </div>
    </>
  );
}

export default RectangularCard;

    