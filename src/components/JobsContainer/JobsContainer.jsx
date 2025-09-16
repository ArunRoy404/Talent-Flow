import React from 'react';
import JobCard from '../JobCard/JobCard';
import Section from '../Section/Section';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';

const fetchJobs = async (limit) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs?limit=${limit}`)
    return res.data.data
}

const JobsContainer = async ({ limit }) => {
    const jobs = await fetchJobs(limit)

    return (
        <Section>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <Fade triggerOnce >
                    {jobs?.map((job) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </Fade>
            </div>
        </Section>
    );
};

export default JobsContainer;