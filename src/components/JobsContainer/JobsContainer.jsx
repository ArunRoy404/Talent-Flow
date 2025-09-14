import React from 'react';
import JobCard from '../JobCard/JobCard';
import Section from '../Section/Section';
import axios from 'axios';

const fetchJobs = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`)
    return res.data.data
}

const JobsContainer = async ({ limit }) => {
    const jobs = await fetchJobs()

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