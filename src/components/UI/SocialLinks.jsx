import { Linkedin, Twitter, Github, Facebook } from "lucide-react";
const SocialLinks = () => {
    return (
        <div className="flex gap-4 mb-4">
            <Linkedin className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <Twitter className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <Github className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <Facebook className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
        </div>
    );
};

export default SocialLinks;