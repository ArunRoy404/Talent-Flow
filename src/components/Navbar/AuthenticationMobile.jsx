import { Button } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SignoutButton from "../SignoutButton/SignoutButton";

const AuthenticationMobile = () => {
    const { data: session } = useSession();
    if (session) return (
        <div className="w-full">
            <SignoutButton/>
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

