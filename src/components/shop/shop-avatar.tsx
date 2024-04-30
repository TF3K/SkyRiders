"use client"

import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar"

interface ShopAvatarProps {
    imgHref?: string,
    fallback?: string
}

export const ShopAvatar = ({imgHref, fallback}: ShopAvatarProps) => {
    return (
        <Avatar>
            <AvatarImage src={imgHref} alt="user avatar" />
            <AvatarFallback>AM</AvatarFallback>
        </Avatar>
    )
}