"use server"

import * as z from "zod"
import { NotificationSchema } from "@/schemas"
import { sendNotificationEmail } from "@/lib/mail"

export async function notify(values:z.infer<typeof NotificationSchema>){
    const validatedFields = NotificationSchema.safeParse(values)

    if (!validatedFields.success){
        return {
            error: "Invalid Fields!"
        }
    }

    const {title, description} = validatedFields.data;

    await sendNotificationEmail(
        title,
        description || ""
    )

    return {success: "Notification sent!"}
}