import * as z from "zod"

export const NewPasswordSchema = z.object({
    password: z.string().min(8,{
        message:"Minimim 8 characters required"
    }),
})  

export const ResetSchema = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
})

export const LoginSchema = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
    password: z.string().min(1, {
        message:"Password is required"
    }),
    code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
    password: z.string().min(8, {
        message:"Minimum 8 caracter required"
    }),
    fullname: z.string().min(1,{
        message:"First name is required"
    })
})

export const NotificationSchema = z.object({
    title: z.string().min(1, {
        message: "You must specify a title for the notification",
    }),
    description: z.optional(z.string())
})

export const PayoutSchema = z.object({
    cardNumber: z.string().min(8, {
        message: " Card Number must be at least 8 characters.",
    }).max(19, {
        message: "Card Number cannot exceed 4 characters.",
    }),

    expireDate: z.date().refine((value) => {
        return value instanceof Date && !isNaN(value.getTime());
    }, {
        message: "Invalid expire date format or value.",
    }),

    securityCode: z.string().min(3, {
        message: "Security code must be at least 3 characters.",
    }).max(4, {
        message: "Security code cannot exceed 4 characters.",
    }),
})

export const profileSchema = z.object({
    firstname: z
        .string()
        .min(3, { message: "Product Name must be at least 3 characters" }),
    lastname: z
        .string()
        .min(3, { message: "Product Name must be at least 3 characters" }),
    email: z
        .string()
        .email({ message: "Product Name must be at least 3 characters" }),
    contactno: z.coerce.number(),
    country: z.string().min(1, { message: "Please select a category" }),
    city: z.string().min(1, { message: "Please select a category" }),
    // jobs array is for the dynamic fields
    jobs: z.array(
        z.object({
        jobcountry: z.string().min(1, { message: "Please select a category" }),
        jobcity: z.string().min(1, { message: "Please select a category" }),
        jobtitle: z
            .string()
            .min(3, { message: "Product Name must be at least 3 characters" }),
        employer: z
            .string()
            .min(3, { message: "Product Name must be at least 3 characters" }),
        startdate: z
            .string()
            .refine((value: any) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
            message: "Start date should be in the format YYYY-MM-DD",
            }),
        enddate: z.string().refine((value: any) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
            message: "End date should be in the format YYYY-MM-DD",
        }),
        }),
    ),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;