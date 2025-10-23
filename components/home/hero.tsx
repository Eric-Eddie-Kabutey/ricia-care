"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SmartCarousel from "@/components/ui/carousel/smart-carousel";
import { carouselSlides, trustedLogos } from "@/data/hero";

const Hero: FC = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
      className="relative bg-emerald-50 py-20 md:py-28 overflow-hidden"
    >
      {/* --- Background Vectors --- */}
      <motion.div
        variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full md:w-2/3 h-full z-0 pointer-events-none"
      >
        <Image src="/assets/svg/vector-left.png" alt="background shape left" fill className="object-cover object-bottom-left"/>
      </motion.div>
      <motion.div
        variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0 pointer-events-none"
      >
        <Image src="/assets/svg/vector-right.png" alt="background shape right" fill className="object-cover object-top-right"/>
      </motion.div>

      <div className="relative z-10 container mx-auto lg:max-w-5xl xl:max-w-6xl px-4 md:px-0">
        <div className="max-w-2xl mx-auto text-center">
          {/* Text Content */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl sm:text-5xl max-w-2xl lg:text-6xl font-bold text-[#005D56]"
                  >
                      <span className="text-black inline-block">
                        The only healthcare  
                      </span>
             service you need
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-4 text-lg text-gray-800"
          >
            Discover a wide range of online doctors, specialized in various fields, offering diverse treatments and services. Explore doctor reviews and effortlessly schedule appointments online.
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex justify-center items-center gap-4"
          >
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg px-6">Register Now</Button>
            <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100 border-gray-300 rounded-lg px-6">For Tourist</Button>
          </motion.div>
        </div>

        {/* --- Smart Carousel --- */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          className="mt-16"
        >
          <SmartCarousel slides={carouselSlides} />
        </motion.div>

        {/* --- Trusted By Section --- */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500">We are trusted by over 20,000+ individuals in these companies</p>
          <div className="mt-6 flex justify-center items-center gap-8 flex-wrap">
            {trustedLogos.map(logo => (
              <div key={logo.alt} className="relative h-6 w-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;