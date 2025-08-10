'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter, 
  DialogClose 
} from "@/components/ui/dialog";


export default function ContactDialog() {
  return (
    <>
      {/* The DialogContent holds all the dialog's elements */}
      <DialogContent className="sm:max-w-[425px]">
        {/* The Header for the title and description */}
        <DialogHeader>
          <DialogTitle className="font-poppins text-2xl text-theme-blue text-center">
            Talk with us
          </DialogTitle>
          <DialogDescription className="font-poppins text-center">
            Fill out the form below.
          </DialogDescription>
        </DialogHeader>

        {/* The form will go here */}
        <p>Form will be inserted here.</p>

        {/* The Footer for action buttons */}
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline" className="rounded-full font-poppins">
              Cancel
            </Button>
          </DialogClose>
          {/* The submit button will be added here */}
        </DialogFooter>
      </DialogContent>
    </>
  );
}