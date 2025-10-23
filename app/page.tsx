import Cta from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import MobileAppCta from "@/components/home/mobile-app-cta";
import Testimonials from "@/components/home/testimonial";

export default function Home() {
  return (<>
    {/* Hero section */}
    <Hero />

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
