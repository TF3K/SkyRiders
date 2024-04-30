"use client"

import { ShopNavbar } from "@/components/shop/shop-navbar";
import { SessionProvider } from "next-auth/react";
import {Footer} from "@/components/footer";

export default function ShopLayout({children}: {children: React.ReactNode}){
    return (
        <SessionProvider>
            {children}
            <Footer />
        </SessionProvider>
    )
}