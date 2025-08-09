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

// Slide Content
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

// Animation variants for Framer Motion
const textVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      delay: 1.0, // Delay text entrance until image is fully visible
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
    <section className="relative w-full h-[550px] overflow-hidden mb-[2%]">
      {/* Image Background with Fade */}
      <AnimatePresence>
        <motion.div
          key={currentSlide.id}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={currentSlide.imageSrc}
            alt={currentSlide.heading}
            fill
            style={{ objectFit: 'cover' }}
            priority={currentSlideIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          {/* Optional: Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Text Overlay with Slide */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <AnimatePresence>
          <motion.div
            key={currentSlide.id + '-text'}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center"
          >
            <h1 className="text-white text-3xl md:text-5xl font-extrabold font-poppins drop-shadow-md">
              {currentSlide.heading}
            </h1>
            <p className="text-white text-xl md:text-2xl mt-2 font-medium font-poppins drop-shadow-md">
              {currentSlide.subheading}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default HeroSection;