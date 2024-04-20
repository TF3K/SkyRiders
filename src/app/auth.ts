import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();

export const {handlers, signIn, signOut, auth} = NextAuth(
    {
    adapter: PrismaAdapter(prisma),
    secret: "5TcZMahVvAln7jrGbQyvBvKolAb0Vsk/Oq+d3jQuPwE=",
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID || "",
            clientSecret: process.env.FACEBOOK_SECRET || ""
        })
    ],
    pages:{
        newUser: "/shop"
    }
    
})