import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    const { searchParams } = new URL(req.url);

    const applicantEmail = searchParams.get("applicantEmail");
    const query = applicantEmail ? { applicantEmail } : {};

    const applicationsCollection = dbConnect('applications')
    const jobsCollection = dbConnect("jobs");

    const data = await applicationsCollection.find(query).toArray()



    const applications = await Promise.all(
        data.map(async (app) => {
            try {
                const job = await jobsCollection.findOne({
                    _id: new ObjectId(app.jobID),
                });
                return {
                    ...app,
                    job,
                };
            } catch (err) {
                return {
                    ...app,
                    job: null,
                };
            }
        })
    )
    return NextResponse.json({ data: applications })
}


export const POST = async (req, res) => {
    const postedData = await req.json()
    const applicationsCollection = dbConnect('applications')
    const data = await applicationsCollection.insertOne(postedData)
    return NextResponse.json({ data })
}