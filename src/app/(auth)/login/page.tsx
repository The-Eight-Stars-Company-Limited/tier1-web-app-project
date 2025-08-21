"use client";

import AuthForm from '@/components/auth/AuthForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-screen bg-white gap-8">
        <div className="hidden md:flex relative h-screen w-1/2">
          <Image
            src="/images/general/services-3.jpg"
            alt="Service Image"
            fill
            objectFit="cover"
            className="absolute z-0"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Image
              src="/favicon-1.png"
              alt="The Eight Stars Company Limited Logo"
              width={250}
              height={250}
              className='shadow-2xl'
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
        <div className="
          font-poppins font-semibold text-blue-800
          text-shadow-sm text-md
          mb-10
        ">
         <p className='pl-4'>Sign In</p>
         <p className='text-xl'>as admin</p>
         </div>
          <AuthForm />
        </div>
      </div>
    </>
  );
}