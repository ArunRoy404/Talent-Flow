import React from 'react';
import JobCard from './JobCard';
import Section from '../Section/Section';
import { Fade } from 'react-awesome-reveal';
import { fetchJobs } from '@/axios/jobs';


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