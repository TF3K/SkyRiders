"use client"

import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { Button } from "../ui/button"
import { signWithFacebook } from "../../../actions/signWithFacebook"
import { signWithGoogle } from "../../../actions/signWithgoogle"


export function Social(){

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
            size={"lg"}
            className="w-full"
            variant={"outline"}
            onClick={async () => signWithGoogle()}
            >
                <FcGoogle className="h-6 w-6" />
            </Button>
            <Button
            size={"lg"}
            className="w-full"
            variant={"outline"}
            onClick={async () => signWithFacebook()}
            >
                <FaFacebook className="h-6 w-6 text-blue-600" />
            </Button>
        </div>
    )
}