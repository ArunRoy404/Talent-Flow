import React from "react";
import { Button } from "antd";
import JobsContainer from "@/components/JobsContainer/JobsContainer";


export default function TrendingJobs() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-secondary">Trending Jobs</h2>
                    <Button type="text">
                        See All Jobs
                    </Button>
                </div>

                {/* Job Cards */}
                <JobsContainer limit={3}/>
            </div>
        </section>
    );
}
