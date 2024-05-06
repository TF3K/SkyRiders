import { db } from "@/lib/db";
import Image from "next/image";
import {notFound} from "next/navigation";

export default async function ProductPage({params} : {
    params: {
        productId: string
    }
}) {


    const product = await db.product.findFirst({
        where: {id: parseInt(params.productId)}
    });

    if (!product) {
        notFound();
    }

    return <>
        <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <Image className="w-full h-full object-cover"
                                src={product.image}
                                alt="Product Image"
                                width={400}
                                height={400}
                                />
                        </div>
                    </div>
                    <div className="md:flex-1 px-4 flex items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.productName}</h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span className="text-gray-600 dark:text-gray-300"> {product.price} TND</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    {product.inStock
                                        ? <span
                                            className="inline-block bg-green-300 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide ml-3">In stock</span>
                                        : <span
                                            className="inline-block bg-red-300 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide ml-3">Out of stock</span>
                                    }

                                </div>
                            </div>
                            <div className="mb-4">
                                <span
                                    className="font-bold text-gray-700 dark:text-gray-300">Product description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {product.description}
                                </p>
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button
                                        className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}