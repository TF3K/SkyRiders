import { Header } from "./header";
import { BackButton } from "./back-button";
import {
    Card,
    CardFooter,
    CardHeader
} from "../ui/card";

export const ErrorCard = () => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header title="Whoops! Something went wrong" />
            </CardHeader>
            <CardFooter>
                <BackButton
                    label="Back to login"
                    href="/auth/login"
                />
            </CardFooter>
        </Card>
    )
}