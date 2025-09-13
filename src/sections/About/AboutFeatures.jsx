import { User, Briefcase, Globe } from "lucide-react";

const AboutFeatures = () => {
    return (
        <section className="py-16 md:py-24 bg-bg-container px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-secondary">How TalentFlow Works</h2>
                <p className="text-secondary max-w-2xl mx-auto mt-2">
                    Simple, fast, and effective. Here’s what makes us different:
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto text-center">
                <div className="bg-card-bg hover:bg-card-bg-hover p-6 rounded-xl border border-gray-300 transition-colors">
                    <User className="w-12 h-12 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-secondary mb-2">For Professionals</h3>
                    <p className="text-secondary">
                        Discover opportunities tailored to your skills and career goals.
                    </p>
                </div>

                <div className="bg-card-bg hover:bg-card-bg-hover p-6 rounded-xl border border-gray-300 transition-colors">
                    <Briefcase className="w-12 h-12 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-secondary mb-2">For Employers</h3>
                    <p className="text-secondary">
                        Connect with verified professionals and simplify recruitment.
                    </p>
                </div>

                <div className="bg-card-bg hover:bg-card-bg-hover p-6 rounded-xl border border-gray-300 transition-colors">
                    <Globe className="w-12 h-12 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-secondary mb-2">Global Reach</h3>
                    <p className="text-secondary">
                        Access a diverse pool of talent across industries and locations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutFeatures;