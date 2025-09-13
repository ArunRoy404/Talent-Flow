import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const CTA = () => {
    return (
        <section className="py-12 md:py-20 text-secondary">
            <div className="container mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Find Your Dream Job?
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                    Join thousands of professionals who have already found success with us.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <Button type="primary" size="large">
                        <Link href="/jobs" className="text-white">
                            Get Started
                        </Link>
                    </Button>

                    <Button size="large" type="default" className="!text-secondary" >
                        <Link href="/about">
                            Learn More
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;