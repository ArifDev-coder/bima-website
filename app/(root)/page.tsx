import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import CTA from "@/components/Home/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toko Rizqy",
  description:
    "Dapatkan telur ayam segar langsung dari peternakan. Juragan Telur menjamin kualitas dan kesegaran terbaik untuk nutrisi keluarga Anda.",
};

export default function Home() {
  return (
    <main>
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Features />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Testimonials />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <FAQ />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <CTA />
      </div>
    </main>
  );
}
