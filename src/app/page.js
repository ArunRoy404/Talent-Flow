import UseHead from "@/components/UseHead/UseHead";
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
      <UseHead
        title="TalentFlow | Find Your Next Opportunity"
        description="TalentFlow connects top talent with leading companies. Explore jobs, showcase your skills, and take the next step in your career."
        image="https://talentflow.com/og-image.jpg"
      />
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
