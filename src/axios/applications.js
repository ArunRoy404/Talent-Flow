
const fetchApplicantApplications = async (email) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, {
        params: { applicantEmail: email }
    });
    return res.data?.data || []
}

const fetchEmployerApplications = async (email) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, {
        params: { employerEmail: email }
    });
    return res.data?.data || []
}

export { fetchApplicantApplications, fetchEmployerApplications }