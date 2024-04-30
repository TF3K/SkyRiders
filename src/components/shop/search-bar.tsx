export const SearchBar = ({className}: {className: string}) => {
    return(
        <div className={`flex flex-row justify-center items-center ${className}`}>
            <input type="text" placeholder="Search for products" className=" w-96 border border-black dark:border-white p-2 rounded-l-3xl" />
            <button className="bg-black dark:bg-white text-white dark:text-black rounded-r-3xl p-2 border border-black dark:border-white">Search</button>
        </div>
    );
}