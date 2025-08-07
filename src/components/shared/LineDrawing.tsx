"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

function LineDrawing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.4"] });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative w-full h-[200px] flex justify-center items-center mb-4">
      <svg
        width="44"
        height="200"
        viewBox="0 0 44 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <g id="Group 47">
          <g id="Line 12" filter="url(#filter0_d_771_1915)">
            <motion.path
              d="M22 22.6875L22 178.548"
              stroke="#FFD27F"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </g>
          <motion.path
            id="Ellipse 29"
            d="M22 5.5C27.3441 5.5 31.5 9.5249 31.5 14.2793C31.4999 19.0336 27.344 23.0586 22 23.0586C16.656 23.0586 12.5001 19.0336 12.5 14.2793C12.5 9.5249 16.6559 5.5 22 5.5Z"
            fill="#072C8B"
            stroke="#FFA600"
            strokeWidth="3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
          <motion.path
            id="Ellipse 30"
            d="M22 180.051C27.3441 180.051 31.5 184.076 31.5 188.83C31.4999 193.584 27.344 197.609 22 197.609C16.656 197.609 12.5001 193.584 12.5 188.83C12.5 184.076 16.6559 180.051 22 180.051Z"
            fill="#072C8B"
            stroke="#FFA600"
            strokeWidth="3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
        </g>
        <defs>
          <filter id="filter0_d_771_1915" x="0" y="0.6875" width="44" height="259.86" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_771_1915"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_771_1915" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default LineDrawing;