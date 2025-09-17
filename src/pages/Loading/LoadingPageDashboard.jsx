
import Loader from '@/components/UI/Loader';

const LoadingPageDashboard = () => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <Loader color='black' size="25" stroke="3" />
        </div>
    );
}

export default LoadingPageDashboard;