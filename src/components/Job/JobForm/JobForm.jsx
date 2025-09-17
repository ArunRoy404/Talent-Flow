'use client'

import { Form, Input, InputNumber, Button, Select, Checkbox, Row, Col } from "antd";
import Loader from '@/components/UI/Loader';
import { useEffect } from "react";
const { TextArea } = Input;
const { Option } = Select;

const JobForm = ({ form, onFinish, isLoading, job }) => {
    useEffect(() => {
        if (job) {
            form.setFieldsValue({
                position: job.position,
                company: job.company,
                logo: job.logo,
                description: job.description,
                location: job.location,
                salary: job.salary,
                monthly: job.monthly,
                jobType: job.jobType,
                experience: job.experience,
                requirements: job.requirements.join(', '),
            });
        }
    }, [job]);

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
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
                            : job ? 'Update Job' : 'Add Job'
                    }
                </Button>
            </Form.Item>
        </Form>
    );
};

export default JobForm;