import CTA from "@/sections/CTA";
import FAQ from "@/sections/FAQ";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Subscribe from "@/sections/Subscribe";
import Testimonials from "@/sections/Testimonials";
import TrendingJobs from "@/sections/TrendingJobs";

export default function Home() {
  return (
    <main className="py-20">
      <Hero/>
      <TrendingJobs/>
      <Features/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <Subscribe/>
    </main>
  );
}
