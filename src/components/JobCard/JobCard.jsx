import React from "react";
import { Card, Button } from "antd";

const JobCard = ({ job }) => {
    return (
        <Card hoverable className="p-4 !bg-[#E9ECF8] !group !shadow-none hover:!bg-[#E2F6CD] flex !bg flex-col justify-between">

            {/* Top Row: Logo + Position/Company */}
            <div className="flex items-center mb-4">
                <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 object-contain rounded"
                />
                <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-secondary">{job.position}</h3>
                    <p className="text-sm text-secondary font-bold">{job.company}</p>
                </div>
            </div>

            {/* Description */}
            <div className="h-10">
                <p className="text-sm mb-4 leading-5">{job.description}</p>
            </div>

            {/* Location */}
            <p className="text-sm text-secondary mb-4">{job.location}</p>

            {/* Bottom Row: Salary + Apply */}
            <div className="flex justify-between items-center">
                <div className="text-sm font-semibold text-text-base">
                    <span className="text-xl">  ${job.salary}</span>
                    {job.monthly ? "/monthly" : ""}
                </div>
                <Button type="default" className="!bg-transparent !text-secondary !border-secondary ">Apply</Button>
            </div>
        </Card>
    );
};

export default JobCard;