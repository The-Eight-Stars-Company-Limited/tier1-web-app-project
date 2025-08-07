"use client";

import Image from "next/image";

function ProductDialogCard({ src, alt, title }: { src: string, alt: string, title: string }) {
  return (
    <>
      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 w-full bg-theme-blue/70 p-2">
          <p className="text-white text-sm font-semibold text-center">
            {title}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDialogCard;