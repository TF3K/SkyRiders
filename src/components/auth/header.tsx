import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets:["latin"],
    weight: ["600"],
});

interface HeaderProps{
    title: string;
    label?: string;
}

export function Header({
    label,
    title,
}:HeaderProps){
    return(
        <div className="w-full flex flex-col justify-center items-center gap-y-4">
            <h1 className={cn(
                "text-3xl font-semibold",
                font.className
            )}>
                {title}
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}