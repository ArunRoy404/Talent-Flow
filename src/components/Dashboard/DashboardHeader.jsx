"use client";

import { User } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <h2 className="text-lg font-medium">Welcome back!</h2>
      <div className="flex items-center gap-3">
        <span className="text-gray-600">John Doe</span>
        <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center">
          <User size={20} />
        </div>
      </div>
    </header>
  );
}
