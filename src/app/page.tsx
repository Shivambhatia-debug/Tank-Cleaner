import Hero from "@/components/hero";
import Services from "@/components/services";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Gallery />
      <CTASection />
    </div>
  );
}

