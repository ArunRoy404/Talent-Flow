import { Card } from 'antd';
import React from 'react';

const JobAddedBy = ({job}) => {
    return (
        <Card className="">
            <p className="text-text-secondary">
                <strong>Added By:</strong> {job.addedBy}
            </p>
        </Card>
    );
};

export default JobAddedBy;