import { NextRequest, NextResponse } from 'next/server';
import { protectedRoutes, publicRoutes } from './constants/routePaths';
import { cookies } from 'next/headers';

const middleware = async (req: NextRequest): Promise<NextResponse> => {
    const token = cookies().get('token') || null;

    if (
        !token &&
        protectedRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
    ) {
        const redirectToLogin = new URL('/auth/login', req.nextUrl.origin);
        return NextResponse.redirect(redirectToLogin.toString());
    }

    if (
        token &&
        publicRoutes.some((path) => req.nextUrl.pathname.startsWith(path)) &&
        req.nextUrl.pathname !== '/get-all-products'
    ) {
        const redirectToMain = new URL('/get-all-products', req.nextUrl.origin);
        return NextResponse.redirect(redirectToMain.toString());
    }

    return NextResponse.next();
};

export default middleware;

export const config = {
    matcher: ['/((?!_next).*)'],
};
