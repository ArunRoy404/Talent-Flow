import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function Hero() {
    return (
        <section className="bg-white py-12 md:py-20 flex items-center justify-center px-6">
            <div className="max-w-3xl text-center flex flex-col gap-6">

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
                    Find Your Dream Job
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl">
                    Explore thousands of opportunities in tech, design, and more. Connect with top companies and start your career journey today.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                    <Button type="primary" size="large">
                        <Link href="/jobs" className="text-white">
                            Browse Jobs
                        </Link>
                    </Button>

                    <Button size="large" type="default" className="!text-secondary" >
                        <Link href="/signin">
                            Sign In
                        </Link>
                    </Button>
                </div>

                {/* Additional Info */}
                <p className="mt-4 text-text-secondary text-sm md:text-base">
                    Trusted by over <span className="font-semibold">5,000+ companies</span> and <span className="font-semibold">100,000+ job seekers</span>.
                </p>
            </div>
        </section>
    );
}
