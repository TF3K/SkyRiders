"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { SearchBar } from "./search-bar";

export function ShopNavbar(){
    const {theme} = useTheme();

    const logoSwitcher = () =>{
        switch (theme){
            case "light":
                return <Image src={"/logo_variants/mono_black.png"} alt="" height={50} width={100} />
            case "dark":
                return <Image src={"/logo_variants/mono_white.png"} alt="" height={50} width={100} />
            default:
                return <Image src={"/logo_variants/mono_black.png"} alt="" height={50} width={100} />
        }
    }

    return(
        <div className="flex justify-between h-auto mx-32">
            <div className="flex flex-col order-1 justify-center items-center">
                <Link href={"/"} className="flex flex-col justify-center items-center">
                    {logoSwitcher()}
                    <h1 className="text-xl tracking-wide font-black text-center">SkyRiders</h1>
                </Link>
            </div>
            <SearchBar className="order-2" />
            <ul className="flex order-3 font-semibold text-xl justify-center items-center space-x-4">
                <div className="flex justify-center items-center bg-black text-white dark:bg-white dark:text-black rounded-3xl h-10 w-14">
                    <ShoppingBasket  />
                </div>
            </ul>
        </div>
    );
}