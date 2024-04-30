"use server"

import { PayoutSchema } from "@/schemas"
import * as z from "zod"

export async function payout(values:z.infer<typeof PayoutSchema>){
    const validatedFields=PayoutSchema.safeParse(values)

    if (!validatedFields){
        return {
            error: " Invalid Fields!"
        }
    }
    return {success: "Your items have been paid!"}

}