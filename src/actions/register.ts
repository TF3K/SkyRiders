"use server"

import { db } from "../lib/db";
import bcrypt from "bcrypt"
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import * as zu from "zod_utilz"
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid Fields" };
    }
    const result = zu.SPR(validatedFields).data;
    
    if (!result) {
        return { error: "Invalid Result" };
    }
    
    const { email, password, fullname } = result;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {error: "Email already in use"};
    }

    await db.user.create({
        data:{
            email,
            password: hashedPassword,
            name: fullname,
        }
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(verificationToken.email, verificationToken.token);


    return { success: "Thank you for creating an account" };
};