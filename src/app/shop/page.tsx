"use client"

import { SessionProvider, useSession } from "next-auth/react";

export default function Shop(){
    const session = useSession();

    return(
        session.status === "authenticated" &&
        (
            <div>
                <h1>Welcome to the shop, {session.data.user.name}</h1>
            </div>
        )
    );
}