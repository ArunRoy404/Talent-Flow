'use client'

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Table, Button, Space, Popconfirm } from "antd";
import axios from "axios";
import { Edit, Trash2 } from "lucide-react";
import { toast } from 'sonner';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";



const fetchJobs = async (email) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
        params: { addedBy: email }
    });
    return res.data?.data || []
}

const deleteJob = async (jobId) => {
    return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${jobId}`);
};


const ManageJob = () => {
    const { data: session } = useSession();
    const queryClient = useQueryClient();

    const {
        data: jobs = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["jobs", session?.user?.email],
        queryFn: () => fetchJobs(session?.user?.email),
        enabled: !!session?.user?.email
    });


    const mutation = useMutation({
        mutationFn: deleteJob,
        onSuccess: () => {
            toast.success("Job deleted successfully");
            queryClient.invalidateQueries(["jobs", session?.user?.email]);
        },
        onError: () => {
            toast.error("Failed to delete job.");
        },
    })
    

    const handleDelete = (jobId) => {
        mutation.mutate(jobId);
    };

    const handleEdit = (jobId) => {
        // Redirect to edit page or open modal
        console.log("Edit job:", jobId);
    };

    const columns = [
        {
            title: "Position",
            dataIndex: "position",
            key: "position",
        },
        {
            title: "Company",
            dataIndex: "company",
            key: "company",
        },
        {
            title: "Job Type",
            dataIndex: "jobType",
            key: "jobType",
        },
        {
            title: "Salary ($)",
            dataIndex: "salary",
            key: "salary",
            render: (salary, record) => (
                <span>
                    {salary} {record.monthly ? "/mo" : ""}
                </span>
            ),
        },
        {
            title: "Experience",
            dataIndex: "experience",
            key: "experience",
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Button
                        type="primary"
                        icon={<Edit size={16} />}
                        onClick={() => handleEdit(record._id)}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Are you sure to delete this job?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="danger" icon={<Trash2 size={16} />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-6 bg-white min-h-screen">
            <h2 className="text-2xl font-bold text-secondary mb-6">Manage Jobs</h2>
            <Table
                columns={columns}
                dataSource={jobs}
                rowKey="_id"
                loading={isLoading}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};

export default ManageJob;
