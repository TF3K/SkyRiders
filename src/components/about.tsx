import ImageCarousel from '@/components/imagecarousel'

export default function About(){
        return(
            <div className="flex justify-center items-center w-full mt-72">
                <div className="flex justify-between items-center w-[90%] px-48">
                    <div className="flex-col order-1 w-[40rem]">
                        <h1 className="text-5xl font-bold underline">What we do</h1>
                        <p className="text-2xl font-semibold leading-9 mt-4">                        
Discover the joy of flight with our online shop dedicated to sky gliding. From top-notch gliders to essential gear, we provide everything you need for an exhilarating experience in the skies. Whether you&apos;re a seasoned pro or just starting out, trust us to elevate your adventure. Fly high with us at SkyRiders.
                        </p>
                    </div>
                    <ImageCarousel />
                </div>
            </div>
        );
}