'use client'

import Loader from '@/components/UI/Loader';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
import { View } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'sonner';

const fetchApplications = async (email) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, {
        params: { employerEmail: email }
    });
    return res.data?.data || []
}

const ApplicationsDashboard = () => {
    const [statusUpdating, setStatusUpdating] = useState({})
    const queryClient = useQueryClient();
    const sessionData = useSession();
    const session = sessionData?.data

    const {
        data: applications = [],
        isLoading,
    } = useQuery({
        queryKey: ["applications", session?.user?.email],
        queryFn: () => fetchApplications(session?.user?.email),
        enabled: !!session?.user?.email
    });


    const handleUpdateStatus = async (applicationId, newStatus) => {
        setStatusUpdating({ applicationId, newStatus })
        try {
            await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications/${applicationId}`, {
                status: newStatus,
            });
            toast.success(`Application ${newStatus}`);
            setStatusUpdating({})
            queryClient.invalidateQueries(["applications", session?.user?.email]);
        } catch (error) {
            toast.error("Failed to update application status");
            setStatusUpdating({})
        }
    };


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
            title: "Applicant name",
            dataIndex: "applicantName",
            key: "applicantName",
        },
        {
            title: "Applicant Email",
            dataIndex: "applicantEmail",
            key: "applicantEmail",
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
            render: (_, record) => {
                const isPending = record.status === "pending";

                return (
                    <Space>
                        {/* View Job Button */}
                        <Link href={`/jobs/${record.jobID}`}>
                            <Button
                                type="default"
                                icon={<View size={16} />}
                            >
                                View Job
                            </Button>
                        </Link>

                        {/* Accept Button */}
                        <Button
                            disabled={statusUpdating.applicationId === record._id || !isPending}
                            type="primary"
                            className="!bg-green-500 !text-white disabled:!bg-gray-200"
                            onClick={() => handleUpdateStatus(record._id, "accepted")}
                        >
                            {
                                statusUpdating.applicationId === record._id && statusUpdating.newStatus === 'accepted'
                                    ? <Loader size='15' stroke='3' />
                                    : 'Accept'
                            }
                        </Button>

                        {/* Reject Button */}
                        <Button
                            type="primary"
                            danger
                            disabled={statusUpdating.applicationId === record._id || !isPending}
                            className='!text-white disabled:!bg-gray-200'
                            onClick={() => handleUpdateStatus(record._id, "rejected")}
                        >
                            {
                                statusUpdating.applicationId === record._id && statusUpdating.newStatus === 'rejected'
                                    ? <Loader size='15' stroke='3' />
                                    : 'Reject'
                            }
                        </Button>
                    </Space>
                );
            },
        },
    ];

    return (
        <div className="p-6 bg-white min-h-screen">
            <h2 className="text-2xl font-bold text-secondary mb-6">Manage Applications</h2>
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

export default ApplicationsDashboard;