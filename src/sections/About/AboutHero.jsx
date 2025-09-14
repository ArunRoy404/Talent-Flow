import PageBanner from '@/components/PageBanner/PageBanner';
import PageDescription from '@/components/PageBanner/PageDescription';
import PageTitle from '@/components/PageBanner/PageTitle';
import React from 'react';

const AboutHero = () => {
    return (
        <PageBanner>
            <PageTitle>
                About TalentFlow
            </PageTitle>
            <PageDescription>
                TalentFlow connects talented professionals with companies seeking the
                best talent. Our mission is to simplify job search and recruitment
                through innovation and trust.
            </PageDescription>
        </PageBanner>
    );
};

export default AboutHero;