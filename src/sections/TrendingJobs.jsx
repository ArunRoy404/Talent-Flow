import React from "react";
import { Button } from "antd";
import JobsContainer from "@/components/Job/JobsContainer";
import Link from "next/link";


export default function TrendingJobs() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-secondary">Trending Jobs</h2>
                    <Link href='/jobs'>
                        <Button type="text">
                            See All Jobs
                        </Button>
                    </Link>
                </div>

                {/* Job Cards */}
                <JobsContainer limit={3} />
            </div>
        </section>
    );
}
