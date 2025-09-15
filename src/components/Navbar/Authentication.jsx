import { Button } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SignoutButton from "../SignoutButton/SignoutButton";

const Authentication = () => {
    const { data: session } = useSession();
    if (session) return (
        <div className="hidden md:block">
            <SignoutButton/>
        </div>
    )
    return (
        <div className="hidden md:block">
            <Link href="/signin" className="text-secondary">
                <Button type="primary">
                    Sign In
                </Button>
            </Link>
        </div>
    );
};

export default Authentication;