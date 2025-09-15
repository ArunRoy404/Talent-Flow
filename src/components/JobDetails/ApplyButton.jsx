'use client'

import { Button } from 'antd';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import Loader from '../Loader/Loader';
import { toast } from 'sonner';
import axios from 'axios';
import Link from 'next/link';

const postApplication = async (data) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, data)
    return res
}

const ApplyButton = ({ job }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { data: session } = useSession();

    const handleApply = async () => {
        setIsLoading(true)
        const applicationData = {
            applicantName: session?.user?.name,
            applicantEmail: session?.user?.email,
            jobID: job._id,
            status: 'pending'
        }

        try {
            await postApplication(applicationData)
            toast.success('Successfully Applied')
        } catch {
            toast.error("Application failed")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            {
                (session?.user?.email === job?.addedBy)
                    ? <Link href={'/dashboard/jobs'}>
                        <Button
                            type="primary"
                            className="!bg-primary !text-secondary !px-6 !py-2 !rounded-lg"
                        >
                            Dashboard
                        </Button>
                    </Link>
                    : <Button
                        disabled={isLoading}
                        onClick={handleApply}
                        type="primary"
                        className="!bg-primary !text-secondary !px-6 !py-2 !rounded-lg"
                    >
                        {
                            isLoading
                                ? <Loader size="20" stroke="3" />
                                : 'Apply Now'
                        }
                    </Button>
            }
        </>
    );
};

export default ApplyButton;