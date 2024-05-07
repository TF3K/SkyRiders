"use client"

import { notify } from "@/actions/notify";
import { NotificationSchema } from "@/schemas";
import { useState, useTransition, useEffect } from "react";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heading } from "../ui/heading";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export default function NotifyForm() {
    const [error,setError] = useState<string | undefined>("");
    const [success,setSuccess] = useState<string | undefined>("");
    const [isPending,startTransition] = useTransition();

    const form = useForm<z.infer<typeof NotificationSchema>>({
        resolver: zodResolver(NotificationSchema),
        defaultValues: {
            title: "",
            description: ""
        },
    });


    const onSubmit = (values: z.infer<typeof NotificationSchema>) => {
        setSuccess("");
        setError("");
        
        startTransition(() => {
            notify(values)
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
    <>
        <Heading title={"Send a notification"} description={"What would you like to notify your users"} />
        <Separator />
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField 
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    {...field}
                                    disabled={isPending}
                                    placeholder="Type the title you want to notify here"
                                    type="text"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Description
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    {...field}
                                    disabled={isPending}
                                    placeholder="Type the description you want to notify here"
                                    type="text"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button disabled={isPending} className="ml-auto mt-4" type="submit">
                    Notify
                </Button>
            </form>
        </Form>
    </>)
}