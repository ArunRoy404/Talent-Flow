import { Button } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Authentication = () => {
    const { data: session } = useSession();
    if (session) return (
        <div className="hidden md:block">
            <Button onClick={() => signOut()} type="default" className="!text-secondary">
                Sign Out
            </Button>
        </div>
    )
    return (
        <div className="hidden md:block">
            <Button type="primary">
                <Link href="/signin" className="text-secondary">
                    Sign In
                </Link>
            </Button>
        </div>
    );
};

export default Authentication;