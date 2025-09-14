import Link from 'next/link';
import React from 'react';

const DashboardLinks = ({links, closeSidebar}) => {
    return (
        <nav className="space-y-4">
            {links.map(({ href, label, icon: Icon }) => (
                <Link
                    key={href}
                    href={href}
                    onClick={closeSidebar}
                    className="flex items-center gap-3 text-gray-700 hover:text-secondary transition"
                >
                    <Icon size={20} />
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default DashboardLinks;