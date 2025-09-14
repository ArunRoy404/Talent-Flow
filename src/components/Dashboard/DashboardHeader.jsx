"use client";

import { Menu, User } from "lucide-react";

export default function DashboardHeader({ setSidebarOpen }) {
    return (
        <header className="bg-white shadow p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden inline-flex items-center p-2 rounded-md text-gray-700 bg-white "
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                </button>
                <h2 className="text-lg font-medium">Welcome back!</h2>
            </div>

            {/* user info */}
            <div className="flex items-center gap-3">
                <span className="text-gray-600">John Doe</span>
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center">
                    <User size={20} />
                </div>
            </div>
        </header>
    );
}
