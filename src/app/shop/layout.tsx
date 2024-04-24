"use client"

import { ShopNavbar } from "@/components/shop/shop-navbar";
import { SessionProvider } from "next-auth/react";

export default function ShopLayout({children}: {children: React.ReactNode}){
    return (
        <SessionProvider>
            <ShopNavbar />
            {children}
        </SessionProvider>
    )
}