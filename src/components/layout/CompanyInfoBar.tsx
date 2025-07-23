import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button'; 


function CompanyInfoBar() {
  return (
    <div className="bg-white py-3 border-b border-gray-100"> {/* White background, subtle bottom border */}
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
          <Button 
            className="
              group
              h-9 px-3 
              bg-button-blue text-white shadow-button 
              hover:bg-button-hover-blue/80 hover:text-white/80
              active:bg-white active:text-button-blue
              transition-colors duration-200
              rounded-[var(--radius-button)] 
            "
            
            // onClick={() => alert('Open Call us Dialog')} // Placeholder for future Dialog open logic
          >
            <Phone 
              size={16} 
              className="
               shrink-0
             text-white 
             group-hover:text-white/80 
             group-active:text-button-blue 
             " 
            />
            <span className="ml-1 hidden md:inline font-poppins">Call us</span>
          </Button>

          {/* Email us Button */}
          <Button 
              className="
              group
              h-9 px-3 
              bg-button-blue text-white shadow-button 
              hover:bg-button-hover-blue/80 hover:text-white/80
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
                text-white 
                group-hover:text-white/80 
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
              bg-button-blue text-white shadow-button 
              hover:bg-button-hover-blue/80 hover:text-white/80
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
              text-white 
              group-hover:text-white/80 
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