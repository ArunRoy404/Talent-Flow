'use client'

import { useQuery } from '@tanstack/react-query';
import { Button, Table, Tag } from 'antd';
import axios from 'axios';
import { View } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const fetchApplications = async (email) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, {
        params: { applicantEmail: email }
    });
    return res.data?.data || []
}


const MyApplicationsDashboard = () => {
    const sessionData = useSession();
    const session = sessionData?.data

    const {
        data: applications = [],
        isLoading,
    } = useQuery({
        queryKey: ["myApplications", session?.user?.email],
        queryFn: () => fetchApplications(session?.user?.email),
        enabled: !!session?.user?.email
    });


    const columns = [
        {
            title: "Position",
            dataIndex: ["job", "position"],
            key: "position",
        },
        {
            title: "Company",
            dataIndex: ["job", "company"],
            key: "company",
        },
        {
            title: "Job Type",
            dataIndex: ["job", "jobType"],
            key: "jobType",
        },
        {
            title: "Salary ($)",
            dataIndex: ["job", "salary"],
            key: "salary",
            render: (salary, record) => (
                <span>
                    {salary} {record.monthly ? "/mo" : ""}
                </span>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                let color;
                switch (status) {
                    case "accepted":
                        color = "green";
                        break;
                    case "rejected":
                        color = "red";
                        break;
                    case "pending":
                    default:
                        color = "orange";
                        break;
                }
                return <Tag color={color}>{status.toUpperCase()}</Tag>;
            },
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Link href={`/jobs/${record.jobID}`}>
                    <Button
                        type="default"
                        icon={<View size={16} />}
                    >
                        View Job
                    </Button>
                </Link>
            ),
        },
    ];

    return (
        <div className="p-6 bg-white min-h-screen">
            <h2 className="text-2xl font-bold text-secondary mb-6">My Applications</h2>
            <Table
                columns={columns}
                dataSource={applications}
                rowKey="_id"
                loading={isLoading}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};

export default MyApplicationsDashboard;