import DashboardCard from "@/components/Dashboard/DashboardCard";

export default function Dashboard() {

    return (
        <main className="flex-1 p-6">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <p className="text-gray-600 mt-2">
                Welcome to your dashboard! Here you can manage jobs, applications, and settings.
            </p>

            {/* Example cards */}
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DashboardCard title={'Jobs Posted'} number={12} />
                <DashboardCard title={'Applications'} number={87} />
                <DashboardCard title={'Applied'} number={4} />
            </div>
        </main>
    );
}
