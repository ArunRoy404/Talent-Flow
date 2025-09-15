
import Loader from '@/components/Loader/Loader';
import React from 'react';

const loading = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <Loader color='black' size="25" stroke="3" />
        </div>
    );
};

export default loading;