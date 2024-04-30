import { UserRole } from '@prisma/client';
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
    adminRoutes
} from "@/routes"

const { auth } = NextAuth(authConfig);

export default auth ((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;
    const isAdmin = req.auth?.user.UserRole === "ADMIN"

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicPath = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isAdminRoute = adminRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute){
        return;
    }

    if (isAuthRoute) {
        if (isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return;
    }

    if (!isAdmin && isAdminRoute){
        return Response.redirect(new URL("/shop", nextUrl))
    }

    if (!isLoggedIn && !isPublicPath){
        return Response.redirect(new URL("/auth/login", nextUrl))
    }


    return;
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
