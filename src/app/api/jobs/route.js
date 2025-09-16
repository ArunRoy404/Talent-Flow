import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit"))

    console.log(limit);

    const addedBy = searchParams.get("addedBy");
    const query = addedBy ? { addedBy } : {};

    const jobsCollection = dbConnect('jobs')
    const data = await jobsCollection.find(query).limit(limit).toArray()
    // const data = await jobsCollection.find().limit(limit).toArray()
    return NextResponse.json({ data },{headers:{'Cache-Control':"no-store"}})
}


export const POST = async (req, res) => {
    const postedData = await req.json()
    const jobsCollection = dbConnect('jobs')
    const data = await jobsCollection.insertOne(postedData)
    return NextResponse.json({ data })
}