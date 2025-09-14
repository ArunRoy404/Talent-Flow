import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashboardLink = ({href, closeSidebar, label, Icon}) => {
    const pathname = usePathname()
    return (
        <Link
            key={href}
            href={href}
            onClick={closeSidebar}
            className={` ${pathname==href ?'border border-gray-300 text-secondary font-semibold' :''} px-2 py-1 rounded flex items-center gap-3 text-gray-700 hover:text-secondary transition`}
        >
            <Icon size={20} />
            {label}
        </Link>
    );
};

export default DashboardLink;