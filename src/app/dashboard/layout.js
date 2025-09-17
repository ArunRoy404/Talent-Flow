"use client";

import { useState } from "react";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import DashboardSidebarMobile from "@/components/Dashboard/DashboardSidebarMobile";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import ReactQueryProvider from "@/providers/QueryProvider";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <NextAuthSessionProvider>
            <ReactQueryProvider>
                <div className="flex min-h-screen">
                    {/* Sidebar - Desktop */}
                    <div className="hidden md:flex">
                        <DashboardSidebar />
                    </div>

                    {/* Sidebar - Mobile */}
                    {sidebarOpen && <DashboardSidebarMobile setSidebarOpen={setSidebarOpen} />}

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col">
                        {/* Header */}
                        <DashboardHeader setSidebarOpen={setSidebarOpen} />

                        {/* Content Area */}
                        {children}
                    </div>
                </div>
            </ReactQueryProvider>
        </NextAuthSessionProvider>
    );
}
