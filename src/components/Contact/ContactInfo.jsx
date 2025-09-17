import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-secondary mb-6">Contact Info</h2>
            <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-secondary" />
                <span className="text-secondary">support@talentflow.com</span>
            </div>
            <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-secondary" />
                <span className="text-secondary">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-secondary" />
                <span className="text-secondary">123 TalentFlow Street, City, Country</span>
            </div>
        </div>
    );
};

export default ContactInfo;