import CTA from "@/sections/CTA";
import FAQ from "@/sections/FAQ";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Subscribe from "@/sections/Subscribe";
import Testimonials from "@/sections/Testimonials";
import TrendingJobs from "@/sections/TrendingJobs";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <main className="pt-20">
      <Fade triggerOnce >
        <Hero />
        <TrendingJobs />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
        <Subscribe />
      </Fade>
    </main>
  );
}
