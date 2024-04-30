import Link  from "next/link"
import Image from "next/image"

export function Product(props: {
    data: {
        id: number,
        name: string,
        category: string,
        price: number,
        image: string
    }
}) {
    return (

        <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 mx-5 mb-10">
            <Link href={`/shop/product/${props.data.id}`}>
                <Image className="h-48 w-full object-cover object-end"
                    src={props.data.image}
                    alt="Home in Countryside"/>
                <div className="p-6">
                    <div className="flex items-baseline">
                        <span
                            className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
                        <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                            {props.data.category}
                        </div>
                    </div>
                    <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{props.data.name}</h4>

                    <div className="mt-1">
                        <span>{props.data.price}</span>
                        <span className="text-gray-600 text-sm"> TND</span>
                    </div>
                </div>
            </Link>
        </div>
);
}