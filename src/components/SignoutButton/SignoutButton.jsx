import { Button } from 'antd';
import { signOut } from 'next-auth/react';
import React, { useState } from 'react';
import Loader from '../UI/Loader';
import { toast } from 'sonner';

const SignoutButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignout = async () => {
        setIsLoading(true)
        try {
            await signOut()
            toast.success("Signout successful")
        } catch {
            toast.error("Signout unsuccessful")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Button onClick={handleSignout} type="default" className="!text-secondary !w-full">
            {isLoading ? <Loader size={20} stroke={3} /> : 'Sign Out'}
        </Button>
    );
};

export default SignoutButton;