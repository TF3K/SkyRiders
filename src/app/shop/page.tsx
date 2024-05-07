import { Footer } from "@/components/footer";
import {Product} from "@/components/shop/product";
import { ShopNavbar } from "@/components/shop/shop-navbar";
import { db } from "@/lib/db";
import Image from "next/image"

export default async function Shop({searchParams}: {searchParams: {search: string}}){
    let products: any[] = [];

    if (searchParams.search && searchParams.search != '') {
        products = await db.product.findMany({where: {
            productName: {
                contains: searchParams.search,
                mode: 'insensitive'
            }
        }
    });
    } else {
        products = await db.product.findMany();
    }
    

    return(
        <>
        <ShopNavbar />
        <div className="flex flex-col justify-center items-center mt-4">
            <Image src="/shop-banner.jpg" className="w-[90%] h-auto" alt="" width={1500} height={675} />
            <div className="flex flex-wrap w-[90%] justify-center mt-16 -mb-64">
                {products.map((product) => {
                    return (
                        <>
                            <Product data={product}></Product>
                        </>
                    );
                })}
                {products.length == 0 &&
                    (<div>
                        <h1>Product not found!</h1>
                    </div>)
                }
            </div>
        </div>
        <Footer />
        </>
    );
}