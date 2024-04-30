export const SearchBar = ({className}: {className: string}) => {
    return(
        <div className={`flex flex-row justify-center items-center ${className}`}>
            <form action="/shop" method="GET">
                <input type="text" placeholder="Search for products"
                       name="search"
                       className="border-2 border-black dark:border-white p-2 rounded-3xl"/>
                <button className="bg-black dark:bg-white text-white dark:text-black rounded-3xl p-2 ml-2">Search</button>
            </form>
        </div>
    );
}