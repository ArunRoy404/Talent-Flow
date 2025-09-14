"use client";

import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";


export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        {/* Content Area */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome to your dashboard! Here you can manage jobs, applications, and settings.
          </p>

          {/* Example cards */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-lg font-medium">Jobs Posted</h2>
              <p className="mt-2 text-3xl font-bold text-blue-600">12</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-lg font-medium">Applications</h2>
              <p className="mt-2 text-3xl font-bold text-green-600">87</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-lg font-medium">Applied</h2>
              <p className="mt-2 text-3xl font-bold text-purple-600">4</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
