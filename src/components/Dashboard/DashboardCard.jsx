'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";




const fetchJobs = async (email) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
    params: { addedBy: email },
  });
  return res.data?.data || [];
};

const fetchEmployerApplications = async (email) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, {
    params: { employerEmail: email },
  });
  return res.data?.data || [];
};

const fetchApplicantApplications = async (email) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, {
    params: { applicantEmail: email },
  });
  return res.data?.data || [];
};




const DashboardCard = ({ title }) => {
  const { data: session } = useSession();
  const email = session?.user?.email;

  let queryKey = null;
  let queryFn = null;

  if (title === "Jobs Posted") {
    queryKey = ["jobsPosted", email];
    queryFn = () => fetchJobs(email);
  } else if (title === "Applications") {
    queryKey = ["employerApplications", email];
    queryFn = () => fetchEmployerApplications(email);
  } else if (title === "Applied") {
    queryKey = ["applicantApplications", email];
    queryFn = () => fetchApplicantApplications(email);
  }

  const { data = [], isLoading, isError } = useQuery({
    queryKey,
    queryFn,
    enabled: !!queryFn && !!email,
  });




  return (
    <div className="p-6 bg-white rounded-xl border border-gray-300 transition">
      <h2 className="text-lg font-medium">{title}</h2>

      {isLoading ? (
        <p className="mt-2 text-3xl font-bold text-gray-400">...</p>
      ) : isError ? (
        <p className="mt-2 text-3xl font-bold text-red-500">Error</p>
      ) : (
        <p className="mt-2 text-3xl font-bold text-secondary">{data.length}</p>
      )}
    </div>
  );
};

export default DashboardCard;
