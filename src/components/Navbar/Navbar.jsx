"use client";

import { useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import MobileHamburger from "./MobileHamburger";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/jobs", label: "Jobs" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/dashboard", label: "Dashboard" },
    ];

    return (
        <header className="bg-white fixed w-full z-50">
            <nav className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-secondary">
                    TalentFlow
                </Link>

                {/* Desktop Navigation */}
                <DesktopNavigation navLinks={navLinks} />

                {/* Sign In Button (desktop) */}
                <div className="hidden md:block">
                    <Button type="primary">
                        <Link href="/signin" className="text-secondary">
                            Sign In
                        </Link>
                    </Button>
                </div>

                {/* Mobile Hamburger */}
                <MobileHamburger toggleMenu={toggleMenu} menuOpen={menuOpen} />
            </nav>

            {/* Mobile Menu */}
            <MobileNavigation menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />
        </header>
    );
}
