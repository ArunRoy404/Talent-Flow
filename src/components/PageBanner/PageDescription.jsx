import React from 'react';

const PageDescription = ({ children }) => {
    return (
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {children}
        </p>
    );
};

export default PageDescription;