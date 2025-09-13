'use client'

// import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import GoogleSignIn from "@/components/GoogleSignIn/GoogleSignIn";

export default function SignIn() {
    // const { data: session } = useSession();
    // const router = useRouter();

    // Redirect if already signed in
    // useEffect(() => {
    //     if (session) {
    //         router.push("/dashboard"); // redirect after login
    //     }
    // }, [session, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="max-w-md w-full text-center space-y-6">
                <h1 className="text-3xl font-bold text-secondary">Sign in to TalentFlow</h1>
                <p className="text-secondary text-sm">Use your Google account to continue</p>

                <GoogleSignIn/>
            </div>
        </div>
    );
}
