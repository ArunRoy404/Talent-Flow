import { Collapse } from "antd";

const FAQ = () => {
    const faqs = [
        {
            key: "1",
            question: "How does TalentFlow help me find a job?",
            answer:
                "TalentFlow uses AI-driven job matching to recommend opportunities that align with your skills, interests, and career goals.",
        },
        {
            key: "2",
            question: "Are the companies verified on TalentFlow?",
            answer:
                "Yes! We ensure that all employers are verified to provide a secure and transparent job search experience.",
        },
        {
            key: "3",
            question: "Is TalentFlow free to use?",
            answer:
                "Absolutely. Job seekers can explore, apply, and access career tools for free. Employers may have premium options.",
        },
        {
            key: "4",
            question: "Can I track my applications?",
            answer:
                "Yes, you can track your job applications directly from your dashboard and stay updated on the status.",
        },
    ];

    return (
        <section className="bg-bg-container py-12 md:py-20 bg-base">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-secondary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Have questions? We’ve got answers. Here are some of the most common
                        ones about TalentFlow.
                    </p>
                </div>

                {/* FAQ Collapse */}
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    items={faqs.map((faq) => ({
                        key: faq.key,
                        label: (
                            <span className="text-base font-medium text-secondary">
                                {faq.question}
                            </span>
                        ),
                        children: (
                            <p className="text-secondary leading-relaxed">{faq.answer}</p>
                        ),
                    }))}
                />
            </div>
        </section>
    );
};

export default FAQ;