import Link from 'next/link';
import React from 'react';

const DesktopNavigation = ({navLinks}) => {
    return (
        <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className=" hover:text-secondary">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DesktopNavigation;