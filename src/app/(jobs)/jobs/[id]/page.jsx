import { Button, Tag } from "antd";
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
            <div className="flex items-center gap-4 mb-8">
                <img
                    src={job.logo}
                    alt={job.company}
                    width={64}
                    height={64}
                    className="rounded-md"
                />
                <div>
                    <h1 className="text-3xl font-bold text-secondary">{job.position}</h1>
                    <p className="text-text-secondary">{job.company}</p>
                </div>
            </div>

            {/* Job Meta */}
            <div className="flex flex-wrap gap-4 mb-6">
                <Tag color="blue">{job.jobType}</Tag>
                <Tag color="green">${job.salary}/month</Tag>
                <Tag color="orange">{job.location}</Tag>
                <Tag color="default">Posted {new Date(job.postedAt).toDateString()}</Tag>
            </div>

            {/* Description */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">Job Description</h2>
                <p className="text-text-secondary">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">Requirements</h2>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                    {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                    ))}
                </ul>
            </div>

            {/* Apply Button */}
            <div>
                <Button
                    type="primary"
                    className="!bg-primary !text-secondary !px-6 !py-2 !rounded-lg"
                >
                    Apply Now
                </Button>
            </div>
        </section>
    );
}

export default JobDetail