import React from 'react';

const JobRequirements = ({job}) => {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-secondary mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
                {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobRequirements;