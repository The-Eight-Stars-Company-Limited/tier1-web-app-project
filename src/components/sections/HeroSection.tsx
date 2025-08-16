"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Slide {
  id: number;
  imageSrc: string;
  heading: string;
  subheading: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageSrc: '/images/hero/hero-image-1.jpg',
    heading: 'Welcome to',
    subheading: 'THE EIGHT STARS LIMITED COMPANY',
  },
  {
    id: 2,
    imageSrc: '/images/hero/hero-image-2.jpg',
    heading: 'Your One Stop',
    subheading: 'For all your Building, Construction & Electrical Materials',
  },
  {
    id: 3,
    imageSrc: '/images/hero/hero-image-3.jpg',
    heading: 'Quality & Reliability',
    subheading: 'Delivering Excellence in Every Project',
  },
];

const textVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      delay: 1.0,
      duration: 0.8,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden mb-[2%]">
      {/* Image Background with Fade */}
      <AnimatePresence>
        <motion.div
          key={currentSlide.id}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 min-w-full min-h-full"
        >
          <Image
            src={currentSlide.imageSrc}
            alt={currentSlide.heading}
            fill
            style={{ objectFit: 'cover' }}
            priority={currentSlideIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-50 sm:opacity-40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 z-10">
        <AnimatePresence>
          <motion.div
            key={currentSlide.id + '-text'}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center max-w-3xl"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins drop-shadow-md leading-tight">
              {currentSlide.heading}
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl mt-2 font-medium font-poppins drop-shadow-md max-w-lg">
              {currentSlide.subheading}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default HeroSection;
