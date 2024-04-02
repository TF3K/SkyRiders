"use server"

import axios from "axios"

import { RegisterSchema } from "@/schemas";
import * as z from 'zod'

export const register = async (values:z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields){
        return {error:"Invalid Fields"}
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