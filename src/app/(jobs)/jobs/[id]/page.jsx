
import { fetchJob } from "@/axios/jobs";
import ApplyButton from "@/components/Job/JobDetails/ApplyButton";
import JobAddedBy from "@/components/Job/JobDetails/JobAddedBy";
import JobDescription from "@/components/Job/JobDetails/JobDescription";
import JobHeader from "@/components/Job/JobDetails/JobHeader";
import JobMeta from "@/components/Job/JobDetails/JobMeta";
import JobRequirements from "@/components/Job/JobDetails/JobRequirements";


const JobDetail = async ({ params }) => {
    const { id } = await params;
    const job = await fetchJob(id)


    if (!job) {
        return <div className="text-center py-20 text-secondary">Job not found</div>;
    }

    return (
        <section className="container mx-auto px-6 py-12 md:py-20">
            {/* Header */}
            <JobHeader job={job} />

            {/* Added By */}
            <JobAddedBy job={job} />

            {/* Job Meta */}
            <JobMeta job={job} />

            {/* Description */}
            <JobDescription job={job} />

            {/* Requirements */}
            <JobRequirements job={job} />

            {/* Apply Button */}
            <ApplyButton job={job} />
        </section>
    );
}

export default JobDetail