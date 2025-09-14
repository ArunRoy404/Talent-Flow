import React from 'react';
import DashboardSidebar from './DashboardSidebar';

const DashboardSidebarMobile = ({setSidebarOpen, }) => {
    return (
        <div className="fixed inset-0 z-40 flex md:hidden">
            {/* Overlay */}
            <div
                className="fixed inset-0"
                onClick={() => setSidebarOpen(false)}
            />
            {/* Sidebar */}
            <div className="relative bg-white w-64 shadow-lg z-50">
                <DashboardSidebar closeSidebar={() => setSidebarOpen(false)} />
            </div>
        </div>
    );
};

export default DashboardSidebarMobile;