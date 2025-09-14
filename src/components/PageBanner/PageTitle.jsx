import React from 'react';

const PageTitle = ({children}) => {
    return (
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {children}
        </h1>

    );
};

export default PageTitle;