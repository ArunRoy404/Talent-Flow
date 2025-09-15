import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const middleware = async (req) => {
    const token = await getToken({ req })
    const isTokenOK = Boolean(token)
    const { pathname } = req.nextUrl

    const isDashboard = pathname.startsWith("/dashboard");
    const isJobDetails = /^\/jobs\/[^/]+$/.test(pathname);


    const isProtectedRoute = isDashboard || isJobDetails

    if (isProtectedRoute && !isTokenOK) {
        const callbackUrl = encodeURIComponent(req.nextUrl.href)
        return NextResponse.redirect(new URL(`/signin?callbackUrl=${callbackUrl}`, req.url))
    }

    const isAuthRoute = req.nextUrl.pathname.startsWith("/signin")
    if (isAuthRoute && isTokenOK) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next()
};

export default middleware;

