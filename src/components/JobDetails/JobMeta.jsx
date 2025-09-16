import { Tag } from 'antd';
import React from 'react';

const JobMeta = ({job}) => {
    return (
        <div className="flex flex-wrap gap-4 my-6">
            <Tag color="blue">{job.jobType}</Tag>
            <Tag color="green">${job.salary}/month</Tag>
            <Tag color="orange">{job.location}</Tag>
            <Tag color="default">Posted {new Date(job.dateAdded).toDateString()}</Tag>
        </div>
    );
};

export default JobMeta;