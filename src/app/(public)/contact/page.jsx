import ContactForm from "@/components/ContactForm/ContactForm";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import PageBanner from "@/components/PageBanner/PageBanner";
import PageDescription from "@/components/PageBanner/PageDescription";
import PageTitle from "@/components/PageBanner/PageTitle";
import { Fade } from "react-awesome-reveal";


export default function Contact() {

    return (
        <main className="bg-base text-text-base">
            <Fade triggerOnce>
                {/* Hero Section */}
                <PageBanner>
                    <PageTitle>
                        Get in Touch
                    </PageTitle>
                    <PageDescription>
                        Have questions or need support? Fill out the form below and our team
                        will get back to you shortly.
                    </PageDescription>
                </PageBanner>

                {/* Contact Form & Info */}
                <section className="py-16 md:py-24 px-6 container mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <ContactForm />

                    {/* Contact Info */}
                    <ContactInfo />
                </section>
            </Fade>
        </main>
    );
}
