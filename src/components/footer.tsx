"use client"
import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { LogoSwitcher } from "@/lib/logo-switcher";

export function Footer(){
    return(
        <footer className="flex justify-center items-center w-full mt-96 space-x-2 mb-16">
            <div className="flex flex-col justify-center items-center">
                <div className="flex">
                    <Link href={"/"}>
                        {LogoSwitcher(30,80)}
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