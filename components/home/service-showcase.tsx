"use client";

import { useState } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceCard from "./service-card";
import { servicesData } from "@/data/services";


const ServicesShowcase: FC = () => {
  const [showServices, setShowServices] = useState(false);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* --- Initial Heading and Button --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">
            For your physical health. For your mental health. For clinicians.
            For hospitals. For all of it in one place. For life.
          </p>
          <AnimatePresence>
            {!showServices && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Button onClick={() => setShowServices(true)} className="mt-8">
                  See More Services
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- Conditionally Rendered Service Cards --- */}
        <AnimatePresence>
          {showServices && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-10"
            >
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesShowcase;