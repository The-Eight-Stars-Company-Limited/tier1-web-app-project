'use client';

import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="relative bg-gray-800 text-white font-poppins h-80 flex items-center justify-center text-center shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/hero/hero-image-5.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
               {subtitle}
              </p>
            )}
        </div>
      </div>
    </section>

  );
};

export default HeroSection;