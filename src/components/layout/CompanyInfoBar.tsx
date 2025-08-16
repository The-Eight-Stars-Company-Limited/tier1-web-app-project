"use client";

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import MobileNavMenu from './MobileNavMenu';
import { ContactButton } from './ContactButton';

function CompanyInfoBar() {
  return (
    <div className="bg-white py-2 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between px-2 md:px-2 lg:px-2 text-sm">

        {/* Company Logo and Mobile Menu */}
        <div className="w-full flex items-center justify-between py-2">
          <div className="flex-shrink-0">
            <Image
              src="/helpers/company-logo.svg"
              alt="The Eight Stars Company Limited Logo"
              width={110}
              height={30}
              className="h-auto w-auto max-w-[110px]"
              priority
            />
          </div>

          <div className="md:hidden flex-shrink-0">
            <MobileNavMenu />
          </div>
        </div>


        {/* Contact Action Buttons */}
        <div className="hidden md:flex md:space-x-6 lg:space-x-4">
          {/* Call us Button */}
          <ContactButton
            buttonLabel="Call us"
            icon={<Phone size={16} className="shrink-0 text-theme-blue group-hover:text-white" />}
            content={
              <>
                <p className="text-sm font-semibold font-poppins text-white">Call our sales team:</p>
                <p className="text-md text-white mt-2">+1 (555) 123-4567</p>
                <p className="text-sm font-semibold font-poppins text-white mt-4">For support:</p>
                <p className="text-md text-white mt-2">+1 (555) 987-6543</p>
              </>
            }
          />

          {/* Email us Button */}
          <ContactButton
            buttonLabel="Email us"
            icon={<Mail size={16} className="shrink-0 text-theme-blue group-hover:text-white" />}
            content={
              <>
                <p className="text-sm font-semibold font-poppins text-white">Email our sales team:</p>
                <p className="text-md text-white mt-2">sales@theeightstars.com</p>
                <p className="text-sm font-semibold font-poppins text-white mt-4">For support:</p>
                <p className="text-md text-white mt-2">support@theeightstars.com</p>
              </>
            }
          />

          {/* Locate us Button */}
          <ContactButton
            buttonLabel="Locate us"
            icon={<MapPin size={16} className="shrink-0 text-theme-blue group-hover:text-white" />}
            content={
              <>
                <p className="text-sm font-semibold font-poppins text-white">Our office is located at:</p>
                <p className="text-md text-white mt-2">123 Main St, Kumasi, Ghana</p>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoBar;
