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

    try{
        const apiUrl = "TODO!"

        const response = await axios.post(apiUrl, validatedFields, {
            headers: {"Content-Type": "application/json"},
        });

        if (response.status === 200) {
            return response.data
        } else {
            throw new Error(response.data.error || "Registration failed")
        }
    } catch (error){
        console.error('Error fetching data from SpringBoot', error);
        return {error: "Registration failed"}
    }
}