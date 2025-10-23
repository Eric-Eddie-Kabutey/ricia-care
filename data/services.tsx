import type { ServiceCardProps } from "@/types/services";
import { Zap, HeartPulse, Briefcase, FileText } from "lucide-react";

// --- Data for the service cards ---
export const servicesData: ServiceCardProps[] = [
  {
    layout: 'image-right',
    pillIcon: Zap,
    pillText: "Streamline care",
    title: "Anytime, anywhere, anything care",
    featureIcon: FileText,
    featureText: "Carecerige helps streamline workflows and enhance patient-provider interactions. Value-based care as 24.5% of payments tie to risk models.",
    imageSrc: "/assets/images/streamline-care.png",
        imageAlt: "Doctor consulting with a patient",
    bgColorClass: "bg-[#A5C5F7]"
  },
  {
    layout: 'image-left',
    pillIcon: HeartPulse,
    pillText: "Wellness programs",
    title: "Quality care starts here",
    featureIcon: FileText,
    featureText: "Concierge medicine offers personalized care, and Carecerige streamlines tasks, with the market expected to reach $13.3B by 2023.",
    imageSrc: "/assets/images/wellness-program.png",
      imageAlt: "Group of people jogging in a park",
    bgColorClass: "bg-[#C3FBBF]"
  },
  {
    layout: 'image-right',
    pillIcon: Briefcase,
    pillText: "Specialised treatment",
    title: "Traditional Service Models",
    featureIcon: FileText,
    featureText: "Fee-for-Service (FFS) accounts for 70% of Medicare payments, and Carecerige enhances workflows, focusing on outcomes.",
    imageSrc: "/assets/images/special-treatment.png",
      imageAlt: "Healthcare professional working on a laptop",
    bgColorClass: "bg-gray-100"
  },
];