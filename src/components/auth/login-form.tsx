"use client"

import * as z from "zod"
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { LoginSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "../../actions/login";
import Link from "next/link";

export function LoginForm(){
    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLikned" ? "Email already in use" : "";

    const [showTwoFac, setShowTwoFac] = useState(false);
    const [error,setError] = useState<string | undefined>("");
    const [success,setSuccess] = useState<string | undefined>("");
    const [isPending,startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values)
            .then((data) => {
                if (data?.error){
                    form.reset();
                    setError(data.error)
                }
                if (data?.success){
                    form.reset();
                    setSuccess(data.success)
                }
                if (data?.twoFactor){
                    setShowTwoFac(true)
                }
            })
            .catch(() => setError("Something went wrong"))
        })
    }

    return(
        <CardWrapper
            headerTitle="Login"
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account ?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        {showTwoFac && (
                            <FormField 
                            control={form.control}
                            name="code"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Code
                                    </FormLabel>
                                    <FormControl>
                                        <InputOTP 
                                            {...field}
                                            maxLength={6}
                                        >
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        )}
                        {!showTwoFac && 
                        (
                            <>
                                <FormField 
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="bababooey123@example.com"
                                                    type="email"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                Password
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    {...field}
                                                    disabled={isPending}
                                                    type="password"
                                                />
                                            </FormControl>
                                            <Button
                                                size="sm"
                                                variant={"link"}
                                                asChild
                                                className="px-0 font-normal"
                                            >
                                                <Link href="/auth/reset">Forgot password ?</Link>
                                            </Button>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )
                        }
                    </div>
                    <FormError message={error || urlError}/>
                    <FormSuccess message={success}/>
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        {showTwoFac ? "Confirm" : "Login"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}