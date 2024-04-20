"use server"

import axios from "axios";
import { LoginSchema } from "@/schemas";
import * as z from "zod"
export async function login(values:z.infer<typeof LoginSchema>){
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Invalid fields!"
        };
    }
    return { success: "You are now logged in"}
}