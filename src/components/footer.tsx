"use client"
import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Footer(){
    const {theme} = useTheme();

    const logoSwitcher = () =>{
        // theme === "light"
        //  ? return Image(BlackMode)
        //  : return Image(WhiteMode)
        switch (theme){
            case "light":
                return <Image src={"/logo_variants/mono_black.png"} alt="" height={15} width={40} />
            case "dark":
                return <Image src={"/logo_variants/mono_white.png"} alt="" height={15} width={40} />
            default:
                return <Image src={"/logo_variants/mono_black.png"} alt="" height={15} width={40} />
        }
    }
    return(
        <footer className="flex justify-center items-center w-full mt-96 space-x-2 mb-16">
            <div className="flex flex-col justify-center items-center">
                <div className="flex">
                    <Link href={"/"}>
                        {logoSwitcher()}
                    </Link>
                    <h2 className=" text-lg">SkyRiders inc. &copy;, All rights reserved</h2>
                </div>
                <div className="flex space-x-4 mt-4">
                    <Link href={"https://www.facebook.com/groups/706837476150288/?locale=fr_FR"}>
                        <FontAwesomeIcon icon={faFacebook} className="h-8 w-8"/>
                    </Link>
                    <Link href={"https://www.instagram.com/flyingtunisia/"}>
                        <FontAwesomeIcon icon={faInstagram} className="h-8 w-8"/>
                    </Link>
                </div>
            </div>
        </footer>
    );
}