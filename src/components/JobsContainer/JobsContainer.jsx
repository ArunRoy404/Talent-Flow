import React from 'react';
import JobCard from '../JobCard/JobCard';
import Section from '../Section/Section';

const JobsContainer = async ({ limit }) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs?limit=${limit || 0}`)
    const data = await res.json()
    const jobs = await data?.data

    return (
        <Section>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {jobs?.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </Section>
    );
};

export default JobsContainer;