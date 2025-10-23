import type { ElementType } from "react";

export interface ServiceCardProps {
  layout: 'image-left' | 'image-right';
  pillIcon: ElementType;
  pillText: string;
  title: string;
  featureIcon: ElementType;
  featureText: string;
  imageSrc: string;
  imageAlt: string;
  bgColorClass: string;
}