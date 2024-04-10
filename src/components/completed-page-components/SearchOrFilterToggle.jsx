import SearchIcon from "../../assets/icons/search-folder-svgrepo-com.svg";
import FilterIcon from "../../assets/icons/filter-svgrepo-com.svg";

export default function SearchOrFilterToggle({ toggleSearchBarActive, searchBarActive }) {
    return (
        <>
            <div className="relative mt-8 w-56 h-12 flex justify-around items-center border-white border-2 border-solid rounded-full text-white font-semibold">
                <button onClick={toggleSearchBarActive}
                    className={`flex transition-all duration-1000 ease-in-out ${searchBarActive ? 'opacity-0' : 'opacity-100'}`}>
                    <img src={SearchIcon} alt="" className={`h-6 mr-2`} />
                    Search
                </button>
                <button onClick={toggleSearchBarActive}
                    className={`flex transition-all duration-1000 ease-in-out ${searchBarActive ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={FilterIcon} alt="" className={`h-6 mr-2`} />
                    Filter
                </button>
                <div className={`absolute w-28 h-10 flex justify-center items-center text-white font-semibold text-base bg-gradient-to-tr from-gradient-blue to-gradient-purple border-white border-2 border-solid rounded-full transition-all duration-500 ease-in-out ${searchBarActive ? 'left-[2px]' : 'left-[calc(100%-114px)]'}`}>
                    <img src={SearchIcon} alt="" className={`h-6 mr-2 ${searchBarActive ? 'inline' : 'hidden'} m-0`} />
                    <img src={FilterIcon} alt="" className={`h-6 mr-2 ${searchBarActive ? 'hidden' : 'inline'} m-0`} />
                    {searchBarActive ?
                        'Search' :
                        'Filter'
                    }
                </div>
            </div>
        </>
    );
}