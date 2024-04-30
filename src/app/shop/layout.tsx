"use client"

import { SessionProvider } from "next-auth/react";
import {Footer} from "@/components/footer";

export default function ShopLayout({children}: {children: React.ReactNode}){
    return (
        <SessionProvider>
            <ShopNavbar/>
            {children}
            <Footer />
        </SessionProvider>
    )
}