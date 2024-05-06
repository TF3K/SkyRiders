"use client"

import { useTheme as useThemeSwitcher } from "next-themes";
import Image from "next/image";

export const LogoSwitcher = (width: number, height: number) => {
        const {theme} = useThemeSwitcher();
        // theme === "light"
        //  ? <Image src={BlackMode} alt="" height={height} width={width} />
        //  : <Image src={WhiteMode} alt="" height={height} width={width} />
        switch (theme){
            case "light":
                return <Image src={"/logo_variants/mono_black.png"} alt="" height={height} width={width} />;
            case "dark":
                return <Image src={"/logo_variants/mono_white.png"} alt="" height={height} width={width} />;
            default:
                return <Image src={"/logo_variants/mono_black.png"} alt="" height={height} width={width} />;
        }
    }
