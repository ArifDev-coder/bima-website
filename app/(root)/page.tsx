import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import CTA from "@/components/Home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
