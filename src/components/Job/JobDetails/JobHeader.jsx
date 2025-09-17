import React from 'react';

const JobHeader = ({job}) => {
    return (
        <div className="flex items-center gap-4 mb-8">
            <img
                src={job.logo}
                alt={job.company}
                width={64}
                height={64}
                className="rounded-md"
            />
            <div>
                <h1 className="text-3xl font-bold text-secondary">{job.position}</h1>
                <p className="text-text-secondary">{job.company}</p>
            </div>
        </div>
    );
};

export default JobHeader;