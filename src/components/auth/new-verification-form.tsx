"use client"

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {CardWrapper} from "./card-wrapper"
import { BeatLoader } from "react-spinners"
import { newVerification } from "@/actions/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const NewVerificationForm = () => {
    const searchParams = useSearchParams();

    const token = searchParams.get("token")
    const [error,setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const onSubmit = useCallback(() => {
        if (success || error) return;
        
        if (!token){
            setError("Missing token")
        }
        newVerification(token as string).then((data) => {
            setSuccess(data.success);
            setError(data.error);
        }).catch(() => {
            setError("Something went wrong")
        })
    }, [token, success, error])

    useEffect(() => {
        onSubmit()
    }, [onSubmit])

    return (
        <CardWrapper
            headerTitle="Verification"
            headerLabel="Confirming your verification"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (
                    <BeatLoader />
                )}
                <FormError message={error} />
                {!success && (
                    <FormSuccess message={success} /> 
                )}
            </div>
        </CardWrapper>
    )
}