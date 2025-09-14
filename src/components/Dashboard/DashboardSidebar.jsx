"use client";

import Link from "next/link";
import { 
  Briefcase, 
  FilePlus2, 
  ListChecks, 
  MessageSquare, 
  ClipboardList 
} from "lucide-react";

const links = [
  { href: "/dashboard", label: "Overview", icon: Briefcase },
  { href: "/dashboard/add-job", label: "Add Job", icon: FilePlus2 },
  { href: "/dashboard/jobs", label: "Manage Jobs", icon: ListChecks },
  { href: "/dashboard/applications", label: "Manage Applications", icon: MessageSquare },
  { href: "/dashboard/my-applications", label: "My Applications", icon: ClipboardList },
];
export default function DashboardSidebar() {
    return (
        <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
            <h1 className="text-2xl font-bold text-secondary mb-8">Dashboard</h1>
            <nav className="space-y-4">
                {links.map(({ href, label, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className="flex items-center gap-3 text-gray-700 hover:text-secondary transition"
                    >
                        <Icon size={20} />
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
