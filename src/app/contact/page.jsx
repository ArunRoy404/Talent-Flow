import ContactForm from "@/components/ContactForm/ContactForm";
import ContactInfo from "@/components/ContactInfo/ContactInfo";


export default function Contact() {

    return (
        <main className="bg-base text-text-base">
            {/* Hero Section */}
            <section className="py-16 md:py-24 text-center px-6 bg-secondary text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Get in Touch
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                    Have questions or need support? Fill out the form below and our team
                    will get back to you shortly.
                </p>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 md:py-24 px-6 container mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <ContactForm/>

                {/* Contact Info */}
                <ContactInfo />
            </section>
        </main>
    );
}
