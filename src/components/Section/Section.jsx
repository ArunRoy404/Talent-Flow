import React from 'react';

const Section = ({ children }) => {
    return (
        <section className="py-16 md:py-24 ">
            <div className='container mx-auto px-6'>
                {children}
            </div>
        </section>
    );
};

export default Section;