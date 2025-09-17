import React from 'react';
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div
            className=" transition-colors duration-300 rounded-xl border border-gray-300 p-6 flex flex-col"
        >
            <Quote className="w-8 h-8 text-secondary mb-4" />
            <p className="leading-relaxed flex-grow">
                “{testimonial.feedback}”
            </p>
            <div className="flex items-center gap-4 mt-4 border-t border-secondary pt-2">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                    <h4 className="font-semibold text-secondary">
                        {testimonial.name}
                    </h4>
                    <p className="text-sm text-textSecondary">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;