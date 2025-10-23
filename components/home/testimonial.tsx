"use client";

import { useState } from "react";
import type { FC } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
import clsx from "clsx";
import { testimonialsData } from "@/data/testimonial";


const Testimonials: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonialsData[activeIndex];

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* --- Heading --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Testimonials</h2>
          <p className="mt-2 text-lg text-gray-500">The Stories We Love to Hear</p>
        </div>

        {/* --- Main Testimonial Container --- */}
        <div className="relative max-w-4xl mx-auto bg-emerald-50/50 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-[radial-gradient(circle_at_center,_rgba(0,167,157,0.1)_0%,_transparent_60%)] -z-0" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm mb-6">
              <MessageSquareQuote className="w-4 h-4 text-gray-400" />
              Testimonials
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-[#003B71]">
              You&apos;re in good company
            </h3>

            <div className="mt-8 min-h-[220px] md:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Speech Bubble */}
                  <div className="relative bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto
                                after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white
                                after:rotate-45 after:-bottom-2 after:left-1/2 after:-translate-x-1/2">
                    <p className="text-gray-600 leading-relaxed">{activeTestimonial.quote}</p>
                  </div>
                  
                  {/* Author Info */}
                  <div className="mt-8">
                    <p className="font-bold text-gray-800">{activeTestimonial.authorName}</p>
                    <p className="text-sm text-sky-700">{activeTestimonial.authorTitle}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* --- Avatar Selector --- */}
            <div className="mt-10 flex items-center justify-center -space-x-2">
              {testimonialsData.map((testimonial, index) => (
                <button
                  key={testimonial.authorName}
                  onClick={() => setActiveIndex(index)}
                  className={clsx(
                    "rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
                    activeIndex === index
                      ? "w-16 h-16 z-10 ring-2 ring-offset-4 ring-emerald-500/80"
                      : "w-12 h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                  )}
                >
                  <Image
                    src={testimonial.avatarSrc}
                    alt={testimonial.authorName}
                    width={64}
                    height={64}
                    className={clsx(
                      "w-full h-full object-cover rounded-full border-4 transition-all duration-300",
                      activeIndex === index
                        ? `${testimonial.highlightColor} border-4`
                        : "border-transparent"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;