import React from "react";
import SearchIcon from "../../../assets/icons/browser-search-svgrepo-com.svg";
import CloseIcon from "../../../assets/icons/close-circle-svgrepo-com.svg";
import ExitIcon from "../../../assets/icons/exit-point-svgrepo-com.svg";

export default function ProjectsSearchBar({ searchBarActive, toggleSearchBarActive, toggleContentVisibility, setSearchQuery, searchBarQuery }) {

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const clearSearch = () =>{
        setSearchQuery('');
    }

    const handleFocus = () => {
        toggleSearchBarActive(true);
    };

    const closeSearch = () => {
        toggleContentVisibility(true);
        const timer = setTimeout(() => {
            toggleSearchBarActive(false);
        }, 1000); // Wait for 1 second before hiding content
        return () => clearTimeout(timer); // Clear timeout on component unmount or state change
    };

    return (
        <>
            <div className="mt-8 w-full max-w-[550px] h-14 border-white border-2 border-solid rounded-full">
                <div className="relative w-full h-full">
                    <img src={SearchIcon} className="absolute left-5 top-[50%] -translate-y-[50%] w-12" />
                    <input
                        type="text"
                        placeholder="Search by project name or technology..."
                        value={searchBarQuery}
                        className="w-full h-full ps-20 font-theme-oxanium bg-white rounded-full focus:bg-gradient-to-tr from-gradient-blue to-gradient-purple focus:text-white focus:placeholder:text-white focus:outline-none"
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                    />
                    <button onClick={clearSearch} className={`absolute right-3 top-[50%] -translate-y-[50%] w-8 ${searchBarActive ? 'inline' : 'hidden'}`}>
                        <img src={CloseIcon} alt="" />
                    </button>

                    <button onClick={closeSearch} className={`absolute -right-12 top-[50%] -translate-y-[50%] w-9 ${searchBarActive ? 'inline' : 'hidden'}`}>
                        <img src={ExitIcon} alt=""/>
                    </button>
                </div>
            </div>
        </>
    );
}
