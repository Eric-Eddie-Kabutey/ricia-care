"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";
import clsx from "clsx";
import type { ServiceCardProps as BaseServiceCardProps } from "@/types/services";

export interface ServiceCardProps extends BaseServiceCardProps {
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

const ServiceCard: FC<ServiceCardProps> = ({
  layout,
  pillIcon: PillIcon,
  pillText,
  title,
  featureIcon: FeatureIcon,
  featureText,
  imageSrc,
  imageAlt,
  bgColorClass,
  index,
  totalCards,
  scrollYProgress,
}) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.05;

  // Use useTransform to map the overall scroll progress to this card's scale.
  // The card starts at full scale (1) and shrinks to its targetScale as we scroll down.
  const scale = useTransform(scrollYProgress, [index / totalCards, 1], [1, targetScale]);

  return (
    <motion.div
      // Each card is sticky. The 'top' value creates the vertical offset between cards.
      style={{
        scale,
        top: `calc(5rem + ${index * 2.5}rem)`, // e.g., top-20, top-[12.5rem], etc.
      }}
      className={clsx(
        "sticky rounded-3xl p-8 md:p-12 origin-top", // origin-top is important for scaling
        bgColorClass
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center",
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