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
          variant="outline" 
            className="h-8 px-3 text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-200"
            // onClick={() => alert('Open Call us Dialog')} // Placeholder for future Dialog open logic
          >
            <Phone size={16} className="text-blue-900 group-hover:text-white" />
            <span className="ml-1 hidden md:inline">Call us</span>
          </Button>

          {/* Email us Button */}
          <Button 
              variant="outline" 
              className="h-8 px-3 text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-200"
              // onClick={() => alert('Open Email us Dialog')} // Placeholder for future Dialog open logic
          >
              <Mail size={16} className="text-blue-900 group-hover:text-white" />
              <span className="ml-1 hidden md:inline">Email us</span>
          </Button>

          {/* Locate us Button */}
          <Button 
            variant="outline" 
            className="h-8 px-3 text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-200"
            // onClick={() => alert('Open Locate us Dialog')} // Placeholder for future Dialog open logic
          >
            <MapPin size={16} className="text-blue-900 group-hover:text-white" />
            <span className="ml-1 hidden md:inline">Locate us</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoBar;