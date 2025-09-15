import React from 'react';

const JobDescription = ({job}) => {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-secondary mb-2">Job Description</h2>
            <p className="text-text-secondary">{job.description}</p>
        </div>
    );
};

export default JobDescription;