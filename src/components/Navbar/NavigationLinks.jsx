import Link from 'next/link';
import React from 'react';

const NavigationLinks = () => {
    const navLinks = [
        { href: "/jobs", label: "Jobs" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/dashboard", label: "Dashboard" },
    ];
    return (
        <>
            {navLinks.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className="hover:text-secondary">
                        {link.label}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default NavigationLinks;