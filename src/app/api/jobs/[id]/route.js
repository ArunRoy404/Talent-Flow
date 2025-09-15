
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const p = await params
    const result = await dbConnect('jobs').findOne({ _id: new ObjectId(p.id) })
    return Response.json(result)
}


export async function DELETE(req, { params }) {
    const p = await params
    const result = await dbConnect('jobs').deleteOne({ _id: new ObjectId(p.id) })
    return Response.json(result)
}


export const PUT = async (req, { params }) => {
        const { id } = await params;
        const body = await req.json();
        const jobsCollection = dbConnect("jobs");

        const result = await jobsCollection.updateOne({ _id: new ObjectId(id) },{ $set: body });
        return Response.json(result)
};