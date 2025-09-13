import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DesktopNavigation = ({navLinks}) => {
    const pathName = usePathname() 
    return (
        <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className={`${pathName==link.href ? 'text-secondary font-bold' :''}  hover:text-secondary`}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DesktopNavigation;