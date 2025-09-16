import JobsContainer from '@/components/JobsContainer/JobsContainer';
import PageBanner from '@/components/PageBanner/PageBanner';
import PageDescription from '@/components/PageBanner/PageDescription';
import PageTitle from '@/components/PageBanner/PageTitle';
import React from 'react';
// Add these exports at the top level of your PAGE component
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Jobs = () => {
    return (
        <main className="bg-base text-text-base">
            {/* Hero Section */}
            <PageBanner>
                <PageTitle>
                    Explore Exciting Opportunities
                </PageTitle>
                <PageDescription>
                    Discover the latest job openings from top companies. Find a role that matches your skills,
                    passions, and career goals — and take the next step in your journey with TalentFlow.
                </PageDescription>
            </PageBanner>


            <JobsContainer/>
        </main>
    );
};

export default Jobs;