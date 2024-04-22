import { db } from "@/lib/db";

export const getPasswordRestTokenbyToken = async (token: string) => {
    try {
        const passwordToken = await db.passwordResetToken.findUnique({
            where: { token }
        });

        return passwordToken;
    } catch {
        return null;
    }
}

export const getPasswordRestTokenbyEmail = async (email: string) => {
    try {
        const passwordToken = await db.passwordResetToken.findFirst({
            where: { email }
        });

        return passwordToken;
    } catch {
        return null;
    }
}