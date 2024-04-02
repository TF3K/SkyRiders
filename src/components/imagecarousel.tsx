import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function ImageCarousel(){
    return (
        <Carousel className="w-[32rem]">
            <CarouselContent>
                {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-0">
                            <Card className="rounded-3xl">
                                <CardContent className="flex aspect-square items-center justify-center p-0 rounded-3xl">
                                    <Image src={`/image${index+1}.jpg`} alt="carousel image" height={1000} width={1000} className="rounded-3xl" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-amber-50 dark:text-white dark:bg-slate-950"/>
            <CarouselNext className="bg-amber-50 dark:text-white dark:bg-slate-950"/>
        </Carousel>
    );

}