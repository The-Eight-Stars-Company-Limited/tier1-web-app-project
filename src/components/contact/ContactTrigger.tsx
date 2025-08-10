'use client';

import React from 'react';
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ContactTrigger() {
  return (
    <>
    <div>
      <p className='font-poppins text-2xl text-shadow-lg text-center text-theme-blue'>
        Get in touch with us
      </p>
      <p className='font-poppins text-md text-center text-theme-blue pt-1'>
        Make an inquiry or request a quote
      </p>
    </div>
    <div className="w-full flex justify-center p-4">
      <Card className="w-[50%] max-w-lg mx-auto shadow-lg rounded-2xl bg-theme-blue p-6 text-center border-none">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-theme-blue rounded-full font-poppins px-8 py-6">
                Make Inquiry
              </Button>
            </DialogTrigger>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-theme-blue rounded-full font-poppins px-8 py-6">
                Request quote
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
     </Card>
    </div>
    </>
  );
}