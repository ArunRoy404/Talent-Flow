'use client'

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Form, Input, InputNumber, Button, Select, Checkbox, Row, Col } from "antd";
import axios from "axios";
import Loader from "@/components/Loader/Loader";
import { toast } from 'sonner';


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
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Position"
                            name="position"
                            rules={[{ required: true, message: "Please enter the position" }]}
                        >
                            <Input placeholder="Frontend Developer" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Company"
                            name="company"
                            rules={[{ required: true, message: "Please enter the company name" }]}
                        >
                            <Input placeholder="Microsoft" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Company Logo URL"
                            name="logo"
                            rules={[{ required: true, message: "Please enter logo URL" }]}
                        >
                            <Input placeholder="https://..." />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Location"
                            name="location"
                            rules={[{ required: true, message: "Please enter location" }]}
                        >
                            <Input placeholder="New York, USA" />
                        </Form.Item>
                    </Col>

                    <Col xs={24}>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true, message: "Please enter job description" }]}
                        >
                            <TextArea rows={4} placeholder="Job description..." />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Salary ($)"
                            name="salary"
                            rules={[{ required: true, message: "Please enter salary" }]}
                        >
                            <InputNumber className="w-full" min={0} placeholder="4500" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Monthly Salary?"
                            name="monthly"
                            valuePropName="checked"
                        >
                            <Checkbox>Yes</Checkbox>
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Job Type"
                            name="jobType"
                            rules={[{ required: true, message: "Please select job type" }]}
                        >
                            <Select placeholder="Full-time">
                                <Option value="Full-time">Full-time</Option>
                                <Option value="Part-time">Part-time</Option>
                                <Option value="Remote">Remote</Option>
                                <Option value="Hybrid">Hybrid</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Experience"
                            name="experience"
                            rules={[{ required: true, message: "Please enter experience required" }]}
                        >
                            <Input placeholder="2+ years" />
                        </Form.Item>
                    </Col>

                    <Col xs={24}>
                        <Form.Item
                            label="Requirements"
                            name="requirements"
                            rules={[{ required: true, message: "Please enter requirements" }]}
                        >
                            <TextArea rows={3} placeholder="Enter requirements, separated by comma" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button disabled={isLoading} type="primary" htmlType="submit">
                        {
                            isLoading
                                ? <Loader size="20" stroke="3" />
                                : 'Add Job'
                        }
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}


export default AddJobForm;