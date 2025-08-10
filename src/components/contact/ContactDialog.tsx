'use client';

import React from 'react';
import { X } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { 
  DialogContent, 
  DialogHeader, 
  DialogDescription,
  DialogClose, 
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactDialogProps {
  formType: "inquiry" | "quote";
}

export default function ContactDialog({ formType }: ContactDialogProps) {
  return (
    <>
      <DialogContent className="sm:max-w-[425px] border-none shadow-none">
        <DialogHeader>
          <DialogTitle className="sr-only">Contact Form</DialogTitle>
          <DialogDescription className="font-poppins text-white text-md text-center">
          {formType === "inquiry" ? "Fill out inquiry form" : "Fill out quote request form"}
          </DialogDescription>
          <DialogClose className="absolute right-4 top-4 text-white">
              <X className="h-4 w-4" />
          </DialogClose>
        </DialogHeader>

        {/* Form */}
        <ContactForm formType={formType} />
      </DialogContent>
    </>
  );
}