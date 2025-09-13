import Link from "next/link";
import { Linkedin, Twitter, Github, Facebook } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">TalentFlow</h2>
          <p className="text-white/80 leading-relaxed">
            Connecting talent with opportunity. Find your dream job or hire top
            professionals with ease.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
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
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Connect with Us</h3>
          <div className="flex gap-4 mb-4">
            <Linkedin className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <Twitter className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <Github className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <Facebook className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
          </div>
          <p className="text-white/80 text-sm">
            support@talentflow.com
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 border-t border-white/20 pt-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}
