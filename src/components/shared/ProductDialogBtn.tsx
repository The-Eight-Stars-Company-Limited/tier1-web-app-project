"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; 

function ProductDialogBtn({ title, description, children, buttonText = "View More" }: { title: string, description: string, children: React.ReactNode, buttonText?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='
          justify-self-start mt-4 w-[100px] text-theme-blue
          bg-white rounded-full cursor-pointer shadow-md
          '>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogOverlay className="bg-black/70 backdrop-blur-md" />
      <DialogContent className="
        max-w-[90vw] md:max-w-xl
        bg-theme-blue/90 text-white border-none font-poppins rounded-[32px]
        ">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default ProductDialogBtn;