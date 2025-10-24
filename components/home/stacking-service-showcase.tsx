"use client";

import { useRef } from "react";
import type { FC } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import ServiceCard from "./stacked-service-card";
import { servicesData } from "@/data/services";


const ServiceCardStack = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.div
      ref={scrollContainerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative h-[300vh]" // The scroll track
    >
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
          index={index}
          totalCards={servicesData.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </motion.div>
  );
};


const StackingServiceShowcase: FC = () => {  

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">
            For your physical health. For your mental health. For clinicians.
            For hospitals. For all of it in one place. For life.
          </p>          
        </div>

        {/* --- Rendered Service Cards --- */}
        <AnimatePresence>
          <ServiceCardStack />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StackingServiceShowcase;