'use client';

import React from 'react';
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContactDialog from "@/components/contact/ContactDialog";

export default function ContactTrigger() {
  return (
    <>
    <div className='w-full flex justify-center mb-10'>
      <Separator className="!w-[800px] mx-auto bg-blue-800 !h-[2px]" />
    </div>
    
    <div>
      <p className='font-poppins text-2xl text-shadow-lg text-center text-theme-blue'>
        Get in touch with us
      </p>
      <p className='font-poppins text-md text-center text-theme-blue pt-1'>
        Make an inquiry or request a quote
      </p>
    </div>
    <div className="w-full flex justify-center p-4 mb-20">
      <Card 
        className="
          w-[50%] max-w-lg mx-auto shadow-2xl rounded-2xl 
          bg-theme-blue p-6 text-center border-none
        ">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="
              bg-white text-theme-blue rounded-full 
                font-poppins px-8 py-6 shadow-lg cursor-pointer
              hover:bg-white/70 hover:text-black/70
              active:bg-theme-blue/70 active:text-white 
                active:ring-1 active:ring-white
                transition-colors duration-100
                ">
                Make Inquiry
              </Button>
            </DialogTrigger>
            <DialogOverlay className="bg-black/70 backdrop-blur-md" />
            <ContactDialog formType="inquiry" />
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="
              bg-white text-theme-blue rounded-full 
                font-poppins px-8 py-6 shadow-lg cursor-pointer
              hover:bg-white/70 hover:text-black/70
              active:bg-theme-blue/70 active:text-white 
                active:ring-1 active:ring-white
                transition-colors duration-100
              ">
                Request quote
              </Button>
            </DialogTrigger>
            <DialogOverlay className="bg-black/70 backdrop-blur-md" />
            <ContactDialog formType="quote" />
          </Dialog>
        </div>
     </Card>
    </div>
    </>
  );
}