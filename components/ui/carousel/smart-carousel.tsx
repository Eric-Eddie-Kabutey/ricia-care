"use client";

import { useState, useEffect, useCallback } from "react";
import type { FC } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import clsx from "clsx";

interface Slide {
  src: string;
  alt: string;
}

interface SmartCarouselProps {
  slides: Slide[];
}

const SmartCarousel: FC<SmartCarouselProps> = ({ slides }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  // The carousel is "active" (draggable) if on mobile OR if there are more than 3 slides.
  const isCarouselActive = isMobile || slides.length > 3;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: isCarouselActive, // This is the key to our "smart" logic
    align: "start",
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    // Defer initial selection to avoid calling setState synchronously inside the effect
    const raf = requestAnimationFrame(() => onSelect(emblaApi));
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      cancelAnimationFrame(raf);
      // Clean up event listeners
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className={clsx(
          "flex",
          isCarouselActive ? "-ml-4" : "gap-6 justify-center" // Use gap for static grid layout
        )}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={clsx(
                "relative rounded-2xl overflow-hidden transition-opacity duration-300",
                // Dynamic sizing for active carousel vs static grid
                isCarouselActive
                  ? "flex-[0_0_70%] sm:flex-[0_0_50%] pl-4"
                  : "w-full md:w-1/3"
              )}
            >
              <div className="aspect-[3/4] h-68">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 70vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Indicators --- */}
      {isCarouselActive && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={clsx(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === selectedIndex ? "bg-emerald-800 scale-125" : "bg-emerald-200"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SmartCarousel;