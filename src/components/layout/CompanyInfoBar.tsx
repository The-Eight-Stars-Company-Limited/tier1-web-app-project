"use client"

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { useState } from 'react';

function CompanyInfoBar() {
  const [isCallUsOpen, setIsCallUsOpen] = useState(false);
  const [isEmailUsOpen, setIsEmailUsOpen] = useState(false);
  const [isLocateUsOpen, setIsLocateUsOpen] = useState(false);
  
  return (
    <div className="bg-white py-2 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between text-sm px-4 md:px-6 lg:px-8">
        
        {/* Company Logo */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/helpers/company-logo.svg"
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
                  hover:text-white hover:shadow-lg hover:cursor-pointer
                  transition-colors duration-200
                  rounded-[var(--radius-button)] 
                  ${isCallUsOpen 
                    ? 'bg-button-blue text-white shadow-lg' 
                    : 'bg-button-yellow text-button-blue'}
                `}
              >
                <Phone 
                  size={16} 
                  className={`
                    shrink-0
                    text-button-blue 
                    group-hover:text-white 
                    ${isCallUsOpen ? 'text-white' : ''}
                `}
                />
                <span className="ml-1 hidden md:inline font-poppins">Call us</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="
                w-64 py-4 px-2 text-center
                bg-button-blue/70 shadow-lg rounded-xl
                border-none
              ">
                <p className="text-sm font-semibold font-poppins text-white">Call our sales team:</p>
                <p className="text-md text-white mt-2">+1 (555) 123-4567</p>
                <p className="text-sm font-semibold font-poppins text-white mt-4">For support:</p>
                <p className="text-md text-white mt-2">+1 (555) 987-6543</p>
            </PopoverContent>
          </Popover>

          {/* Email us Button */}
          <Popover open={isEmailUsOpen} onOpenChange={setIsEmailUsOpen}>
            <PopoverTrigger asChild>
              <Button 
                className={`
                  group
                  h-9 px-3 
                  bg-button-yellow text-button-blue shadow-button 
                  hover:text-white hover:shadow-lg hover:cursor-pointer
                  transition-colors duration-200
                  rounded-[var(--radius-button)] 
                  ${isEmailUsOpen 
                    ? 'bg-button-blue text-white shadow-lg' 
                    : 'bg-button-yellow text-button-blue'}
                  `}
              >
                <Mail 
                  size={16} 
                  className={`
                    shrink-0
                    text-button-blue 
                    group-hover:text-white 
                    ${isEmailUsOpen ? 'text-white' : ''}
                `}
                />
                <span className="ml-1 hidden md:inline font-poppins">Email us</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
            className="
              w-64 py-4 px-2 text-center
              bg-button-blue/70 shadow-lg rounded-xl
              border-none
            "
            >
              <p className="text-sm font-semibold font-poppins text-white">Email our sales team:</p>
              <p className="text-md text-white mt-2">sales@theeightstars.com</p>
              <p className="text-sm font-semibold font-poppins text-white mt-4">For support:</p>
              <p className="text-md text-white mt-2">support@theeightstars.com</p>
            </PopoverContent>
          </Popover>

          {/* Locate us Button */}
          <Popover open={isLocateUsOpen} onOpenChange={setIsLocateUsOpen}>
            <PopoverTrigger asChild>
              <Button 
                className={`
                  group
                  h-9 px-3 
                  bg-button-yellow text-button-blue shadow-button 
                  hover:text-white hover:shadow-lg hover:cursor-pointer
                  transition-colors duration-200
                  rounded-[var(--radius-button)] 
                  ${isLocateUsOpen 
                    ? 'bg-button-blue text-white shadow-lg' 
                    : 'bg-button-yellow text-button-blue'}
                `}
              >
                <MapPin 
                  size={16} 
                  className={`
                  shrink-0
                  text-button-blue 
                  group-hover:text-white 
                  ${isLocateUsOpen ? 'text-white' : ''}
                `} 
                />
                <span className="ml-1 hidden md:inline font-poppins">Locate us</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
            className="
              w-64 py-4 px-2 text-center
              bg-button-blue/70 shadow-lg rounded-xl
              border-none
            "
            >
              <p className="text-sm font-semibold font-poppins text-white">Our office is located at:</p>
              <p className="text-md text-white mt-2">123 Main St, Anytown, USA</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoBar;