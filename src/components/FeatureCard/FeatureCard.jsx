import React from 'react';

const FeatureCard = ({feature}) => {
    return (
        <div
            key={feature.id}
            className=" bg-secondary rounded-xl shadow-sm p-6 text-center"
        >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
            </h3>
            <p className="text-white leading-relaxed">
                {feature.description}
            </p>
        </div>
    );
};

export default FeatureCard;