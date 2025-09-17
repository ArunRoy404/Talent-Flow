
import Loader from '@/components/UI/Loader';

const LoadingPage = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <Loader color='black' size="25" stroke="3" />
        </div>
    );
};

export default LoadingPage;