import React from 'react';
import { Menu, X } from "lucide-react";

const MobileHamburger = ({ toggleMenu, menuOpen }) => {
    return (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="text-secondary focus:outline-none"
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
    );
};

export default MobileHamburger;