import { Button } from 'antd';
import React from 'react';

const ApplyButton = ({ job }) => {
    return (
        <Button
            type="primary"
            className="!bg-primary !text-secondary !px-6 !py-2 !rounded-lg"
        >
            Apply Now
        </Button>
    );
};

export default ApplyButton;