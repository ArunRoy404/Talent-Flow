import React from 'react';
import DashboardLink from './DashboardLink';

const DashboardLinks = ({ links, closeSidebar }) => {
    return (
        <nav className="space-y-4">
            {links.map(({ href, label, icon: Icon }) => (
                <DashboardLink
                    key={label}
                    href={href}
                    label={label}
                    Icon={Icon}
                    closeSidebar={closeSidebar}
                />
            ))}
        </nav>
    );
};

export default DashboardLinks;