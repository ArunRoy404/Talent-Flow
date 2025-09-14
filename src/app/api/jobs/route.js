import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    const { searchParams } = new URL(req.url);
    const limit = parseFloat(searchParams.get("limit")) || 0
    const jobsCollection = dbConnect('jobs')
    const data = await jobsCollection.find().limit(limit).toArray()
    return NextResponse.json({ data })
}