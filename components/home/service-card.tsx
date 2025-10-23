"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ServiceCardProps } from "@/types/services";


const ServiceCard: FC<ServiceCardProps> = ({
  layout,
  pillIcon: PillIcon,
  pillText,
  title,
  featureIcon: FeatureIcon,
  featureText,
  imageSrc,
    imageAlt,
  bgColorClass
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}          
          className={clsx(
        "rounded-3xl p-8 md:p-12",
        bgColorClass // This will be "bg-slate-50", "bg-emerald-50", etc.
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center",
          // This reorders the grid columns for the 'image-left' layout on large screens
          layout === 'image-left' ? 'lg:grid-flow-col-dense' : ''
        )}
      >
        {/* --- Text Column --- */}
        <div className={clsx(layout === 'image-left' ? 'lg:col-start-2' : '')}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm mb-4">
            <PillIcon className="w-4 h-4 text-gray-500" />
            {pillText}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            {title}
          </h3>
          <div className="mt-6 flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
            <FeatureIcon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
            <p className="text-gray-600">{featureText}</p>
          </div>
        </div>

        {/* --- Image Column --- */}
        <div className={clsx("relative w-full aspect-[4/3]", layout === 'image-left' ? 'lg:col-start-1' : '')}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;