import { Button } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import AuthenticationMobile from './AuthenticationMobile';

const MobileNavigation = ({ menuOpen, navLinks, setMenuOpen }) => {
    const pathName = usePathname()
    return (
        <>
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md w-full absolute top-full left-0 flex flex-col gap-4 px-6 py-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${pathName == link.href ? 'text-secondary font-bold' : ''}  hover:text-secondary`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <AuthenticationMobile />
                </div>
            )}
        </>
    );
};

export default MobileNavigation;