"use client"

import FooterSection from '@/components/sections/FooterSection';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FuturisticContactDialog from "@/components/contact/FuturisticContactDialog";

export default function Portfolio() {
  return (
    <>
      <div className="h-[500px] w-full bg-white">
        <div className="relative w-[95%] h-[400px] mx-auto shadow-2xl rounded-b-[16px] mb-10">
          <div className="relative h-full w-full">
            <Image
              src="/images/general/card-image-2.jpg"
              alt="Service Image"
              fill
              objectFit="cover"
              className="rounded-b-[16px]"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="font-poppins text-3xl font-bold text-shadow-lg">
              Our Portfolio
            </h2>
            <p className="font-poppins text-lg mt-2 text-shadow-lg">
              We provide services that are tailored to meet the needs of our clients.
              And help them achieve their project goals.
            </p>
          </div>     
        </div>
        <div className="mt-300 bg-white flex justify-center mb-20">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="
              bg-black text-white rounded-full 
                font-poppins px-8 py-6 shadow-lg cursor-pointer
              hover:bg-gray-800
              active:bg-gray-900 
                active:ring-1 active:ring-white
                transition-colors duration-100
              ">
                Forms
              </Button>
            </DialogTrigger>
            <DialogOverlay className="bg-black/70 backdrop-blur-md" />
            <FuturisticContactDialog />
          </Dialog>
        </div>
        <FooterSection />
      </div>
    </>
  );
}