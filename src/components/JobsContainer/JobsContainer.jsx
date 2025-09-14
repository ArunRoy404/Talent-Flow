import React from 'react';
import JobCard from '../JobCard/JobCard';
import Section from '../Section/Section';

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


const JobsContainer = () => {
    return (
        <Section>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </Section>
    );
};

export default JobsContainer;