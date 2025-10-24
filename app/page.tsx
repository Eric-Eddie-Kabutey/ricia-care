import Cta from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import MobileAppCta from "@/components/home/mobile-app-cta";
import ServicesShowcase from "@/components/home/service-showcase";
import StackingServiceShowcase from "@/components/home/stacking-service-showcase";
import Testimonials from "@/components/home/testimonial";

export default function Home() {
  return (<>
    {/* Hero section */}
    <Hero />
 

    {/* Stacking service card */}
    <StackingServiceShowcase />

    {/* Mobile App cta */}
    <MobileAppCta />    

    {/* Testimonial section */}
    <Testimonials />

    {/* FAQ section */}
    <Faq />

    {/* CTA section */}
    <Cta />
  </>);
}
