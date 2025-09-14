
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
    console.log(result);
    return Response.json(result)
}