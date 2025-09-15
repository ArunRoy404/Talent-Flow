'use client'
import { Form } from 'antd';
import JobForm from './JobForm';
import { useState } from 'react';
import axios from "axios";
import { toast } from 'sonner';


const updateJob = async (id, data) => {
    const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`, data);
    return res.data;
};

const UpdateJobForm = ({ job }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm()

    const handleUpdate = async (values) => {
        setIsLoading(true)

        const jobData = {
            ...values,
            requirements: values.requirements.split(","),
        };

        try {
            const res = await updateJob(job._id, jobData)
            if(res.modifiedCount){
                toast.success("Job updated successfully!");
            }
            else{
                toast.warning("No change of data");
            }
        } catch {
            toast.error("Failed to update job");
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <JobForm form={form} job={job} onFinish={handleUpdate} isLoading={isLoading} />
    );
};

export default UpdateJobForm;