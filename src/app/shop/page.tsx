"use client"

import { ShopNavbar } from "@/components/shop/shop-navbar";
import { useSession } from "next-auth/react";

export default function Shop(){
    const session = useSession();

    return(
        session.status === "authenticated" &&
        (
            <div>
                <ShopNavbar />
                <h1>Welcome to the shop, {session.data.user.name}</h1>
            </div>
        )
    );
}