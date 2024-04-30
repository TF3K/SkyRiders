import {Product} from "@/components/shop/product";
import { db } from "@/lib/db";


export default async function Shop({searchParams}: {searchParams: {search: string}}){

    console.log('----------------------- ', searchParams.search);

    let products: any[] = [];

    if (searchParams.search && searchParams.search != '') {
        products = await db.product.findMany({where: {
            name: {
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
            <img src="/shop-banner.jpg" className="w-100 h-auto" alt=""/>
            <div className="flex flex-wrap justify-center mt-10">

                {products.map((product) => {
                    return <>
                        <Product data={product}></Product>
                    </>;
                })}
                {products.length == 0 &&
                    <div>
                        <h1>Product not found!</h1>
                    </div>
                }

            </div>

        </>
    );
}