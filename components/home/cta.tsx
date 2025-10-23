"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Cta: FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-0 h-16 lg:max-w-5xl xl:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          // --- The background gradient is the key here ---
                  className="relative text-white rounded-3xl p-12 md:p-20 lg:p-24 flex flex-col items-center text-center 
          bg-[radial-gradient(ellipse_at_top,_#34765A,_#052e16,_black)]
                      overflow-hidden"
        >
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              12+ Gambian Hospitals Covered!
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Our groundbreaking healthcare network spans over 12 hospitals across The Gambia,
              ensuring that no matter where you are, the most advanced care is always within reach.
            </p>

            <Button
              size="lg"
              className="mt-8 bg-emerald-400/20 text-white font-semibold border border-emerald-400/30
                         hover:bg-emerald-400/30 hover:border-emerald-400/40
                         backdrop-blur-sm rounded-full px-8 py-6 text-base transition-all hover:scale-105"
            >
              Explore Our Network
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;