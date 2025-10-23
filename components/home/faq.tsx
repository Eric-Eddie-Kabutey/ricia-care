"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { faqData } from "@/data/faq";


const Faq: FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* --- Heading --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm mb-6">
            <HelpCircle className="w-4 h-4 text-gray-400" />
            FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* --- Accordion --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue="item-0"
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-0 rounded-3xl transition-all
                           data-[state=open]:bg-slate-50 data-[state=open]:shadow-lg 
                           data-[state=closed]:border data-[state=closed]:border-gray-200"
              >
                <AccordionTrigger className="group p-6 text-left font-semibold text-lg hover:no-underline">
                  <span className="flex-1">{item.question}</span>
                  {/* Icon swaps based on open/closed state */}
                  <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden" />
                  <Minus className="h-5 w-5 shrink-0 transition-transform duration-200 hidden group-data-[state=open]:block" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;