import React from 'react';

const DashboardCard = ({ title, number }) => {
    return (
        <div className="p-6 bg-white rounded-xl border border-gray-300 transition">
            <h2 className="text-lg font-medium">{title}</h2>
            <p className="mt-2 text-3xl font-bold text-secondary">{number}</p>
        </div>
    );
};

export default DashboardCard;