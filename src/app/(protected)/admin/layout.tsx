"use client"

import { ShopNavbar } from "@/components/shop/shop-navbar";
import { SessionProvider } from "next-auth/react";
import {NavBar} from "@/components/navbar";

export default function AdminLayout({children}: {children: React.ReactNode}){
    return (
        <SessionProvider>
            <NavBar />
            {children}
        </SessionProvider>
    )
}