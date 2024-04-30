export const SearchBar = ({className}: {className: string}) => {
    return(
        <div className={`flex flex-row justify-center items-center ${className} p0`}>
            <input type="text" placeholder="Search for products" className="border-2 border-black dark:border-white p-2 rounded-3xl" />
            <button className="bg-black dark:bg-white text-white dark:text-black rounded-3xl p-2 ml-2">Search</button>
        </div>
    );
}