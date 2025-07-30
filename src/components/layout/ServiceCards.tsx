'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Service {
  imageSrc: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    imageSrc: '/images/hero/hero-image-3.jpg',
    title: 'General Contracting',
    description: 'Comprehensive management of your construction projects from start to finish, ensuring quality and timely completion.',
  },
  {
    imageSrc: '/images/hero/hero-image-3.jpg',
    title: 'Electrical Installation',
    description: 'Expert installation of electrical systems for residential, commercial, and industrial properties, adhering to the highest safety standards.',
  },
  {
    imageSrc: '/images/hero/hero-image-1.jpg',
    title: 'Lighting Solutions',
    description: 'Design and implementation of efficient and aesthetic lighting solutions for any space, enhancing both functionality and ambiance.',
  },
  {
    imageSrc: '/images/hero/hero-image-5.jpg',
    title: 'Project Consultation',
    description: 'Professional advice and planning for your construction and electrical projects to optimize outcomes and budget.',
  },
  {
    imageSrc: '/images/hero/hero-image-4.jpg',
    title: 'Building Maintenance',
    description: 'Reliable and proactive maintenance services to keep your properties in optimal condition, ensuring longevity and safety.',
  },
  {
    imageSrc: '/images/hero/hero-image-3.jpg',
    title: 'Plumbing Services',
    description: 'Professional plumbing solutions for new constructions and existing properties, from installation to repair.',
  },
];

const ServiceCard = ({ imageSrc, title, description }: Service) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-lg overflow-hidden shadow-2xl bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4 text-gray-800">
        <h3 className="text-xl font-bold font-poppins mb-2">{title}</h3>
        <div className="flex items-center text-button-blue font-semibold">
          <span>Read More</span>
          <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ type: 'spring', stiffness: 300 }}>
            <ArrowRight size={18} className="ml-2" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 font-poppins text-sm">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function ServiceCards() {
  return (
    <section className="bg-[#FFCF75] py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}