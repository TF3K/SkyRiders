import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export const {handlers: {GET, POST}, signIn, signOut, auth} = NextAuth(
    {
        events: {
            async linkAccount({ user }){
                await db.user.update({
                    where: { id: user.id},
                    data: { emailVerified: new Date() }
                })
            }
        },
        callbacks: {
            async signIn({ user, account }){
                if (account?.provider !== "credentials") return true;

                const existingUser = await getUserById(user.id ?? "");

                if (!existingUser?.emailVerified) return false;

                if (existingUser.isTwoFacEnabled){
                    const twoFacConf = await getTwoFactorConfirmationByUserId(existingUser.id);
                    if (!twoFacConf) return false;

                    await db.twoFactorConfirmation.delete({
                        where: { id: twoFacConf.id }
                    })
                }

                return true
            },
            async session({ token, session }){
                if (token.sub && session.user){
                    session.user.id = token.sub;
                }
                if (token.role && session.user){
                    session.user.role = token.role as UserRole;
                }
                return session;
            },
            async jwt({ token }){
                if (!token.sub) return token;

                const existingUser = await getUserById(token.sub);
                if (!existingUser) return token;
                token.role = existingUser.role;

                return token;
            }
        },
        adapter: PrismaAdapter(db),
        secret: process.env.AUTH_SECRET,
        ...authConfig,
        pages: {
            signIn: "/auth/login",
            error: "/auth/error",
            newUser: "/shop"
        },
        session: {strategy: "jwt"}
})