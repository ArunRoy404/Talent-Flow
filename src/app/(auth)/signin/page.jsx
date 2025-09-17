import GoogleSignIn from "@/components/UI/GoogleSignIn";

export default function SignIn() {
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
