import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import dbConnect from "@/lib/dbConnect";


export const PATCH = async (req, { params }) => {
    try {
        const { id } = params;
        const { status } = await req.json();

        if (!status || !["pending", "accepted", "rejected"].includes(status)) {
            return NextResponse.json(
                { error: "Invalid status value" },
                { status: 400 }
            );
        }

        const applicationsCollection = dbConnect("applications");

        const result = await applicationsCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { status } }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { error: "Application not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "Application status updated",
            status,
        });
    } catch (error) {
        console.error("PATCH /applications/[id] error:", error);
        return NextResponse.json(
            { error: "Failed to update application" },
            { status: 500 }
        );
    }
};
