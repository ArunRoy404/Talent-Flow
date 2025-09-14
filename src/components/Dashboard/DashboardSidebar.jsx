"use client";

import Link from "next/link";
import {
    Briefcase,
    FilePlus2,
    ListChecks,
    MessageSquare,
    ClipboardList
} from "lucide-react";
import DashboardLinks from "./DashboardLinks";

const links = [
    { href: "/dashboard", label: "Overview", icon: Briefcase },
    { href: "/dashboard/add-job", label: "Add Job", icon: FilePlus2 },
    { href: "/dashboard/jobs", label: "Manage Jobs", icon: ListChecks },
    { href: "/dashboard/applications", label: "Manage Applications", icon: MessageSquare },
    { href: "/dashboard/my-applications", label: "My Applications", icon: ClipboardList },
];


export default function DashboardSidebar({ closeSidebar }) {
    return (
        <aside className="w-64 bg-white p-6">
            <h1 className="text-2xl font-bold text-secondary mb-8">Dashboard</h1>
            <DashboardLinks links={links} closeSidebar={closeSidebar}/>
        </aside>
    );
}
