'use client';

import React from 'react';
import { X } from "lucide-react";
import FuturisticForm from "@/components/contact/QuoteAndInquiryForm";
import { 
  DialogContent, 
  DialogHeader, 
  DialogDescription,
  DialogClose, 
  DialogTitle,
} from "@/components/ui/dialog";

export default function FuturisticContactDialog() {
  return (
    <>
      <DialogContent className="sm:max-w-2xl border-none shadow-none bg-transparent">
        <DialogHeader>
          <DialogTitle className="sr-only">Contact Form</DialogTitle>
          <DialogDescription className="font-poppins text-white text-md text-center">
            Contact Us
          </DialogDescription>
          <DialogClose className="absolute right-4 top-4 text-white">
              <X className="h-4 w-4" />
          </DialogClose>
        </DialogHeader>

        {/* Form */}
        <FuturisticForm />
      </DialogContent>
    </>
  );
}