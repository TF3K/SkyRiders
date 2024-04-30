"use client"

import Link from "next/link";
import { ModeToggle } from "./theme/theme-switch";
import { SessionProvider, useSession } from "next-auth/react";
import { LogoSwitcher } from "@/lib/logo-switcher";

export function NavBar(){
    const session = useSession();
    return(
        <div className="flex justify-between h-auto mx-32">
            <div className="flex flex-col order-1 justify-center items-center">
                <Link href={"/"}>
                    {LogoSwitcher(150,300)}
                    <h1 className="text-2xl tracking-wide font-black text-center">SkyRiders</h1>
                </Link>
            </div>
            <ul className="flex order-2 font-semibold text-xl justify-center items-center space-x-4">
                <li>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={"/shop"}>
                        Shop
                    </Link>
                </li>
                {session.status != "authenticated" &&
                <li>
                    <Link href={"/auth/login"} className="bg-black text-white dark:bg-white dark:text-black rounded-3xl h-8 p-4">
                        Sign in
                    </Link>
                </li>
                }
                <ModeToggle />
            </ul>
        </div>
    );
}