'use client'

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Form, Input, InputNumber, Button, Select, Checkbox, Row, Col } from "antd";
import axios from "axios";
import { toast } from 'sonner';
import JobForm from "@/components/Job/JobForm/JobForm";

const { TextArea } = Input;
const { Option } = Select;

const postJob = async (data) => {
    const res = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, data)
    return res
}


const AddJobForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { data: session } = useSession();
    const [form] = Form.useForm()


    const handleSubmit = async (values) => {
        setIsLoading(true)
        const data = {
            ...values,
            addedBy: session?.user?.email,
            dateAdded: new Date().toISOString(),
        };

        const jobData = {
            ...data,
            requirements: data.requirements.split(',')
        }

        try {
            await postJob(jobData)
            form.resetFields()
            toast.success('Job post has been created')

        } catch {
            toast.error('Job post has not been created')
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div className="p-6 bg-white w-full">
            <h2 className="text-2xl font-bold text-secondary mb-6">Add Job</h2>
            <JobForm form={form} onFinish={handleSubmit} isLoading={isLoading} />
        </div>
    );
}


export default AddJobForm;