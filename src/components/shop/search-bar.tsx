import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const SearchBar = ({className}: {className: string}) => {
    return(
        <div className={`flex flex-row justify-center items-center ${className}`}>
            <form action="/shop" method="GET" className="flex ml-16">
                <input type="text" placeholder="Search for products"
                    name="search"
                    className="border border-black dark:border-white px-4 rounded-l-3xl w-96"/>
                <button className="flex justify-center items-center bg-black dark:bg-white text-white dark:text-black rounded-r-3xl p-2 border border-black dark:border-white">
                    <MagnifyingGlassIcon className="h-6 w-6 mr-2"/>
                </button>
            </form>
        </div>
    );
}