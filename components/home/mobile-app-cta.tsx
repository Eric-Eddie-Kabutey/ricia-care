"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { LayoutGrid } from "lucide-react";

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

// These variants will animate each phone into its final transformed position
const phoneVariant = (rotation: number, xOffsetSm: string, xOffsetLg: string): Variants => ({
    hidden: { opacity: 0, y: 100, rotate: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        y: 0, 
        rotate: rotation,
        x: [xOffsetSm, xOffsetLg], // Use keyframes for responsive positioning
        scale: 1,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
});

const centerPhoneVariant: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } // Slight delay for center
    },
};

const MobileAppCta: FC = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-slate-50 pt-20 md:pt-28 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        
        {/* --- Text Content --- */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-10">
          <motion.div variants={textItemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm mb-6">
            <LayoutGrid className="w-4 h-4 text-gray-400" />
            Application
          </motion.div>

          <motion.h2 variants={textItemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Ricia Care Mobile App
          </motion.h2>
          
          <motion.p variants={textItemVariants} className="mt-4 text-lg text-gray-600">
            Experience healthcare at your fingertips with our easy-to-use mobile app.
          </motion.p>

          <motion.div variants={textItemVariants} className="mt-8 flex justify-center items-center gap-4">
            <a href="#" aria-label="Download on the App Store">
              <Image src="/assets/icons/app-store-badge.png" alt="App Store" width={135} height={40} />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              <Image src="/assets/icons/google-play-badge.png" alt="Google Play" width={135} height={40} />
            </a>
          </motion.div>
        </div>

        {/* --- Phone Mockups --- */}
        <div className="hidden relative mt-12 h-80 md:h-96 lg:h-[500px]">
          {/* Left Phone */}
         
              </div>
              <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-60 md:h-96 lg:h-[380px]"
        >
          {/* --- Left Phone --- */}
          <motion.div
            variants={phoneVariant(-15, '-70%', '-90%')}
            className="absolute bottom-0 left-[45%] md:left-[48%] w-48 md:w-64 lg:w-70 h-auto z-10"
          >
            <Image src="/assets/images/phone-left-sm.png" alt="App welcome screen on mobile" width={300} height={600} className="w-52 md:w-72 lg:w-80 drop-shadow-2xl md:hidden" />
            <Image src="/assets/images/phone-left-lg.png" alt="App welcome screen on desktop" width={300} height={600} className="drop-shadow-2xl hidden md:block" />
          </motion.div>

          {/* --- Center Phone --- */}
          <motion.div
            variants={centerPhoneVariant}
            className="absolute bottom-0 left-1/2 w-42 md:w-76 lg:w-60 h-auto z-20 -translate-x-1/2 md:scale-110"
          >
            <Image src="/assets/images/phone-center-sm.png" alt="App main interface on mobile" width={320} height={640} className="drop-shadow-2xl md:hidden" />
            <Image src="/assets/images/phone-center-lg.png" alt="App main interface on desktop" width={320} height={640} className="drop-shadow-2xl hidden md:block" />
          </motion.div>

          {/* --- Right Phone --- */}
          <motion.div
            variants={phoneVariant(15, '-30%', '-10%')}
            className="absolute bottom-0 left-[54%] md:left-[53%] w-48 md:w-64 lg:w-72 h-auto z-10"
          >
            <Image src="/assets/images/phone-right-sm.png" alt="App login screen on mobile" width={300} height={600} className="drop-shadow-2xl md:hidden" />
            <Image src="/assets/images/phone-right-lg.png" alt="App login screen on desktop" width={300} height={600} className="drop-shadow-2xl hidden md:block" />
          </motion.div>
        </motion.div>
              
      </div>
    </motion.section>
  );
};

export default MobileAppCta;