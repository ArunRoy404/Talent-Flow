import UpdateJobForm from "@/components/Job/JobForm/UpdateJobForm";
import axios from "axios";

const fetchJob = async (id) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`)
        return res.data
    } catch {
    }
}

const UpdateJob = async ({ params }) => {

    const { id } = await params;
    const job = await fetchJob(id)

    if (!job) {
        return <div className="text-center py-20 text-secondary">Job not found</div>;
    }

    return (
        <div className="p-6 bg-white w-full">
            <h2 className="text-2xl font-bold text-secondary mb-6">Update Job</h2>
            <UpdateJobForm job={job} />
        </div>
    );
};

export default UpdateJob;