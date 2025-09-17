
import Loader from '@/components/UI/Loader';
import React from 'react';

const loading = () => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <Loader color='black' size="25" stroke="3" />
        </div>
    );
};

export default loading;