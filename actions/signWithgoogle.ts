"use server"

import { signIn } from "@/app/auth"

export async function signWithGoogle(){
    await signIn("google", {redirectTo:"/api/auth/login"})
}