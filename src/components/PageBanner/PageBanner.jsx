import React from 'react';

const PageBanner = ({ children }) => {
    return (
        <div className="pt-36 pb-20 md:pt-40 md:pb-24 bg-secondary text-white text-center px-6">
            {children}
        </div>
    );
};

export default PageBanner;