import AboutFeatures from "@/sections/About/AboutFeatures";
import AboutHero from "@/sections/About/AboutHero";
import Mission from "@/sections/About/Mission";
import Story from "@/sections/About/Story";
import { Fade } from "react-awesome-reveal";

const AboutPage = () => {
    return (
        <main className="bg-base text-text-base">
            <Fade triggerOnce>
                {/* Hero Section */}
                <AboutHero />

                {/* Mission & Vision */}
                <Mission />

                {/* How it Works / Features */}
                <AboutFeatures />

                {/* Our Story / Team */}
                <Story />
            </Fade>
        </main>
    );
};

export default AboutPage;