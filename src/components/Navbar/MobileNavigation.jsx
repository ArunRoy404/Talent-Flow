import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const MobileNavigation = ({menuOpen, navLinks, setMenuOpen}) => {
    return (
        <>
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md w-full absolute top-full left-0 flex flex-col gap-4 px-6 py-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-secondary"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button type="primary" className="mt-2">
                        <Link href="/signin" className="text-secondary">
                            Sign In
                        </Link>
                    </Button>
                </div>
            )}
        </>
    );
};

export default MobileNavigation;