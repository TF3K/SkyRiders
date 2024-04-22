"use client"

import { SessionProvider, useSession } from "next-auth/react";

export default function ShopLayout({children}:{children:React.ReactNode}){
    const session = useSession();

    return (
        <SessionProvider>
            <div>
                {children}
            </div>
        </SessionProvider>
    )
}