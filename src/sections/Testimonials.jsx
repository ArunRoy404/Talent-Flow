import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Software Engineer at TechCorp",
            feedback:
                "TalentFlow made job searching effortless! The AI recommendations were spot-on and helped me land my dream job.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Product Manager at InnovateX",
            feedback:
                "I loved how easy it was to connect with verified employers. The platform feels trustworthy and professional.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Data Analyst at GrowthHub",
            feedback:
                "The career growth tools gave me insights I never had before. It’s more than a job portal—it’s a career partner.",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        },
    ];

    return (
        <section className="py-12 md:py-20 bg-bgContainer">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-secondary mb-4">
                        Testimonials
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Hear from professionals who found their next big opportunity with TalentFlow.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}
