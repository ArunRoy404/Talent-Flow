// components/Features.jsx
import { Button } from "antd";
import { Briefcase, Building2, TrendingUp } from "lucide-react";

export default function Features() {
    const features = [
        {
            id: 1,
            icon: <Briefcase className="w-8 h-8 text-primary" />,
            title: "Smart Job Matching",
            description:
                "Our AI-driven system connects you with jobs tailored to your skills, interests, and career goals.",
        },
        {
            id: 2,
            icon: <Building2 className="w-8 h-8 text-primary" />,
            title: "Trusted Employers",
            description:
                "Work with verified companies, ensuring transparency and building trust in every application.",
        },
        {
            id: 3,
            icon: <TrendingUp className="w-8 h-8 text-primary" />,
            title: "Career Growth Tools",
            description:
                "Access resources, insights, and personalized recommendations to help you grow in your career.",
        },
    ];

    return (
        <section className="py-12 md:py-20 bg-bg-container">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-secondary text-center mb-4">
                        Features
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        We make job hunting smarter, faster, and more reliable with features designed to support your career journey.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className=" bg-secondary rounded-xl shadow-sm p-6 text-center"
                        >
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-white leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
