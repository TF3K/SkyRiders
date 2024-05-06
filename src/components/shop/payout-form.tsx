"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PayoutSchema } from "@/schemas"
import { payout } from "@/actions/payout"
import { CardWrapper } from "../auth/card-wrapper"
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";
import { DatePicker } from "./date-picker";

export function PayoutForm() {
    const [error,setError] = useState<string | undefined>("");
    const [success,setSuccess] = useState<string | undefined>("");
    const [isPending,startTransition] = useTransition();

    const form = useForm<z.infer<typeof PayoutSchema>>({
        resolver: zodResolver(PayoutSchema),
        defaultValues: {
            cardNumber: "",
            expireDate: new Date(),
            securityCode: "",
        },
    })

    const onSubmit = (values: z.infer<typeof PayoutSchema>) => {
        setSuccess("");
        setError("");
        
        startTransition(() => {
            payout(values)
            .then((data) => {
                if (data.success){
                    setSuccess(data.success)
                }
                if (data.error) {
                    setError(data.error)
                }
            })
        })
    }

    return (
        !success && !error ? (
        <CardWrapper
            headerTitle="Payment"
            headerLabel="Fill in your credit card information"
            backButtonLabel="Keep shopping"
            backButtonHref="/shop"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                            
                        )}
                        />
                        <FormField
                            control={form.control}
                            name="expireDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Expire Date</FormLabel>
                                    <FormControl>
                                        <DatePicker />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                        control={form.control}
                        name="securityCode"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Seurity Number</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                            
                        )}
                        />
                    </div>
                <Button 
                    type="submit"
                    disabled={isPending}
                    className="w-full"
                >Checkout</Button>
                </form>
            </Form>
            <FormError message={error} />
        </CardWrapper>
        ) :
        success && (
            <CardWrapper
                headerTitle="Payment success"
                headerLabel="Thank you for shopping with us!"
                backButtonLabel="Return to shop"
                backButtonHref="/shop"
            >
                <FormSuccess message={success} />
            </CardWrapper>
        )
    )
}
