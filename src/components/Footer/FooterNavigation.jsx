import Link from "next/link";

const FooterNavigation = ({ navLinks }) => {
    return (
        <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className="text-white/80 hover:text-primary transition-colors"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default FooterNavigation;