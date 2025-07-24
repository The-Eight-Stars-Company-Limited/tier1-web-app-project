"use client"

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { useState } from 'react';


function CompanyInfoBar() {
  const [isCallUsOpen, setIsCallUsOpen] = useState(false);

  return (
    <div className="bg-white py-2 border-b border-gray-100"> {/* White background, subtle bottom border */}
      <div className="container mx-auto flex items-center justify-between text-sm px-4 md:px-6 lg:px-8">
        
        {/* Company Logo */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/assets/helpers/company-logo.svg"
            alt="The Eight Stars Company Limited Logo"
            width={110}
            height={10}
            className="h-auto"
            priority         
          />
        </div>

        {/* Contact Action Buttons - using Shadcn Button component */}
        <div className="flex space-x-2 md:space-x-4">
          {/* Call us Button */}
          <Popover open={isCallUsOpen} onOpenChange={setIsCallUsOpen}>
            <PopoverTrigger asChild>
              <Button 
                className={`
                  group
                  h-9 px-3 
                  bg-button-yellow text-button-blue shadow-button 
                  hover:text-white
                  active:bg-white active:text-button-blue
                  transition-colors duration-200
                  rounded-[var(--radius-button)] 
                  ${isCallUsOpen ? 'bg-white text-button-blue' : 'bg-button-yellow text-button-blue'}
                `}
                
            
            // onClick={() => alert('Open Call us Dialog')} // Placeholder for future Dialog open logic
          >
            <Phone 
              size={16} 
              className="
               shrink-0
             text-button-blue 
             group-hover:text-white 
             group-active:text-button-blue 
             " 
            />
            <span className="ml-1 hidden md:inline font-poppins">Call us</span>
          </Button>
            </PopoverTrigger>
            <PopoverContent
            className="
              w-64 py-4 px-2 text-center
              bg-white shadow-lg rounded-md
            "
            >
              <p className="text-sm font-semibold font-poppins text-button-blue">Call our sales team:</p>
              <p className="text-md text-button-blue mt-2">+1 (555) 123-4567</p>
              <p className="text-sm font-semibold font-poppins text-button-blue mt-4">For support:</p>
              <p className="text-md text-button-blue mt-2">+1 (555) 987-6543</p>
            </PopoverContent>
          </Popover>

          {/* Email us Button */}
          <Button 
              className="
              group
              h-9 px-3 
              bg-button-yellow text-button-blue shadow-button 
              hover:text-white
              active:bg-white active:text-button-blue
              transition-colors duration-200
              rounded-[var(--radius-button)] 
            "
              // onClick={() => alert('Open Email us Dialog')} // Placeholder for future Dialog open logic
          >
              <Mail 
                size={16} 
                className="
                shrink-0
                text-button-blue 
                group-hover:text-white 
                group-active:text-button-blue 
                " 
              />
              <span className="ml-1 hidden md:inline font-poppins">Email us</span>
          </Button>

          {/* Locate us Button */}
          <Button 
            className="
              group
              h-9 px-3 
              bg-button-yellow text-button-blue shadow-button 
              hover:text-white
              active:bg-white active:text-button-blue
              transition-colors duration-200
              rounded-[var(--radius-button)] 
            "
            // onClick={() => alert('Open Locate us Dialog')} // Placeholder for future Dialog open logic
          >
            <MapPin 
              size={16} 
              className="
              shrink-0
              text-button-blue 
              group-hover:text-white 
              group-active:text-button-blue 
              " 
            />
            <span className="ml-1 hidden md:inline font-poppins">Locate us</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoBar;