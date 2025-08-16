"use client"

import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ContactButtonProps {
  buttonLabel: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export function ContactButton({ buttonLabel, icon, content }: ContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          className={`
            group h-9 px-3
            bg-theme-yellow text-theme-blue shadow-md
            hover:text-white hover:shadow-lg hover:cursor-pointer
            transition-colors duration-200
            rounded-full
            ${isOpen ? 'bg-theme-blue text-white shadow-lg' : 'bg-theme-yellow text-theme-blue'}
          `}
        >
          {icon}
          <span className="ml-1 hidden md:inline font-poppins">{buttonLabel}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="
          w-64 py-4 px-2 text-center
          bg-theme-blue/70 shadow-lg rounded-xl
          border-none
        "
      >
        {content}
      </PopoverContent>
    </Popover>
  );
}
