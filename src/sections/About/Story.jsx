import React from 'react';

const Story = () => {
    return (
        <section className="py-16 md:py-24 px-6 container mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-secondary">Our Story</h2>
                <p className="text-secondary max-w-2xl mx-auto mt-2">
                    TalentFlow was founded to make job searching simpler and recruitment smarter.
                    We believe in transparency, innovation, and connecting the right talent with the right opportunities.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto text-center">
                <div className="bg-card-bg p-6 rounded-xl border border-gray-300">
                    <img
                        src="https://randomuser.me/api/portraits/men/11.jpg"
                        alt="Founder 1"
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-secondary font-semibold mb-1">John Smith</h4>
                    <p className="text-secondary text-sm">Co-Founder & CEO</p>
                </div>

                <div className="bg-card-bg p-6 rounded-xl border border-gray-300">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Founder 2"
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-secondary font-semibold mb-1">Sarah Johnson</h4>
                    <p className="text-secondary text-sm">Co-Founder & CTO</p>
                </div>

                <div className="bg-card-bg p-6 rounded-xl border border-gray-300">
                    <img
                        src="https://randomuser.me/api/portraits/men/22.jpg"
                        alt="Team Member"
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-secondary font-semibold mb-1">Michael Chen</h4>
                    <p className="text-secondary text-sm">Head of Product</p>
                </div>
            </div>
        </section>
    );
};

export default Story;