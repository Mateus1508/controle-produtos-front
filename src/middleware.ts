import { NextRequest, NextResponse } from 'next/server';
import { protectedRoutes } from './constants/routePaths';
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

    return NextResponse.next();
};

export default middleware;

export const config = {
    matcher: ['/((?!_next).*)'],
};
