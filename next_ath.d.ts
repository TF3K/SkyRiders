import NextAuth, { DefaultSession } from "next-auth"

export type ExtendedUser = DefaulSession["user"] & {
    role: "ADMIN" | "USER"
}

declare module "next-auth"{
    interface Session {
        user: ExtendedUser;
    }
}