"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./theme/theme-switch";

export default function NavBar(){
    const {theme} = useTheme();

    const logoSwitcher = () =>{
        switch (theme){
            case "light":
                return <Image src={"/logo_variants/mono_black.png"} alt="" height={75} width={150} />
            case "dark":
                return <Image src={"/logo_variants/mono_white.png"} alt="" height={75} width={150} />
            default:
                return <Image src={"/logo_variants/mono_black.png"} alt="" height={75} width={150} />
        }
    }

    return(
        <div className="flex justify-between h-auto mx-32">
            <div className="flex flex-col order-1 justify-center items-center">
                <Link href={"/"}>
                    {logoSwitcher()}
                    <h1 className="text-2xl tracking-wide font-black">SkyRiders</h1>
                </Link>
            </div>
            <ul className="flex order-2 font-semibold text-xl justify-center items-center space-x-4">
                <li>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        Shop
                    </Link>
                </li>
                <ModeToggle />
            </ul>
        </div>
    );
}