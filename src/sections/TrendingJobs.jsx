import React from "react";
import { Button } from "antd";
import JobCard from "@/components/JobCard/JobCard";

const jobs = [
    {
        id: 1,
        position: "Frontend Developer",
        company: "Microsoft",
        logo: "https://pbs.twimg.com/profile_images/1919293580646010880/ZSHWjszR_400x400.png",
        description: "Work on modern web applications using React and Next.js.",
        location: "New York, USA",
        salary: 4500,
        monthly: true,
    },
    {
        id: 2,
        position: "UI/UX Designer",
        company: "Apple",
        logo: "https://yt3.googleusercontent.com/s5hlNKKDDQWjFGzYNnh8UeOW2j2w6id-cZGx7GdAA3d5Fu7zEi7ZMXEyslysuQUKigXNxtAB=s900-c-k-c0x00ffffff-no-rj",
        description: "Create intuitive and beautiful user interfaces.",
        location: "San Francisco, USA",
        salary: 4000,
        monthly: true,
    },
    {
        id: 3,
        position: "Backend Developer",
        company: "Tesla",
        logo: "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
        description: "Build scalable APIs and microservices with Node.js.",
        location: "Remote",
        salary: 5000,
        monthly: true,
    },
];


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
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </section>
    );
}
