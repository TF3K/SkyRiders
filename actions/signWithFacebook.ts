"use server"

import { signIn } from "@/app/auth"

export async function signWithFacebook(){
    await signIn("facebook",{redirectTo: "/"})
}