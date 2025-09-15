import { Button } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthenticationMobile = () => {
    const { data: session } = useSession();
    if (session) return (
        <div className="w-full">
            <Button onClick={() => signOut()} type="default" className="!text-secondary !w-full">
                Sign Out
            </Button>
        </div>
    )
    return (
        <div className="w-full">
            <Link href="/signin" className="text-secondary">
                <Button type="primary" className="!w-full">
                    Sign In
                </Button>
            </Link>

        </div>
    );
};

export default AuthenticationMobile;

