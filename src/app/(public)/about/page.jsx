import AboutFeatures from "@/sections/About/AboutFeatures";
import AboutHero from "@/sections/About/AboutHero";
import Mission from "@/sections/About/Mission";
import Story from "@/sections/About/Story";



const About = () => {
return (
    <main className="bg-base text-text-base">
      {/* Hero Section */}
      <AboutHero/>

      {/* Mission & Vision */}
      <Mission/>

      {/* How it Works / Features */}
      <AboutFeatures/>

      {/* Our Story / Team */}
      <Story/>
    </main>
  );
};

export default About;