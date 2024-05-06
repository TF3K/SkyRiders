"use client"

import Link from "next/link";
import { BellIcon, ShoppingBasket } from "lucide-react";
import { SearchBar } from "./search-bar";
import { LogoSwitcher } from "@/lib/logo-switcher";
import { ModeToggle } from "../theme/theme-switch";
import { Button } from "../ui/button";
import { UserNav } from "../layout/user-nav";

export function ShopNavbar(){


    return(
        <div className="flex justify-between h-auto mx-32">
            <div className="flex flex-col order-1 justify-center items-center">
                <Link href={"/"} className="flex flex-col justify-center items-center">
                    {LogoSwitcher(150,300)}
                    <h1 className="text-xl tracking-wide font-black text-center">SkyRiders</h1>
                </Link>
            </div>
            <SearchBar className="order-2" />
            <div className="flex order-3 font-semibold text-xl justify-center items-center space-x-4">
                <Link href={"/shop/payout"}>
                    <div className="flex justify-center items-center bg-black text-white dark:bg-white dark:text-black rounded-3xl h-10 w-14">
                        <ShoppingBasket />
                    </div>
                </Link>
                <Button onClick={()=> {}}>
                    <BellIcon />
                </Button>
                <ModeToggle />
                <UserNav />
            </div>
        </div>
    );
}