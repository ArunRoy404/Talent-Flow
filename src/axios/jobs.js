const { default: axios } = require("axios")

const fetchJob = async (id) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`)
        return res.data
    } catch {

    }
}

const fetchJobs = async (limit, email) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs?limit=${limit}`, {
        params: { addedBy: email }
    })
    return res.data.data
}


export { fetchJob, fetchJobs }