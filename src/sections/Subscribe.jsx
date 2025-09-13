import { Input, Button } from "antd";

const Subscribe = () => {
    return (
        <section className="py-12 md:py-20 bg-bg-container">
            <div className="container mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Stay Updated
                </h2>
                <p className="text-lg text-secondary mb-8">
                    Subscribe to our newsletter and never miss the latest job updates.
                </p>

                {/* Input + Button */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
                    <Input
                        placeholder="Enter your email"
                        className="!h-12 !rounded-lg !border-gray-300"
                    />
                    <Button
                        type="primary"
                        className="!bg-primary !border-none !h-12 !px-8 !rounded-lg !text-secondary font-semibold hover:!bg-primary/90"
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;