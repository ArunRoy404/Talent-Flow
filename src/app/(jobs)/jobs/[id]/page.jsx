import ApplyButton from "@/components/JobDetails/ApplyButton";
import JobAddedBy from "@/components/JobDetails/JobAddedBy";
import JobDescription from "@/components/JobDetails/JobDescription";
import JobHeader from "@/components/JobDetails/JobHeader";
import JobMeta from "@/components/JobDetails/JobMeta";
import JobRequirements from "@/components/JobDetails/JobRequirements";
import axios from "axios";

const fetchJob = async (id) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`)
    return res.data
}


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