import React from "react";
import SearchIcon from "../../../assets/icons/browser-search-svgrepo-com.svg";
import CloseIcon from "../../../assets/icons/close-circle-svgrepo-com.svg";

export default function ProjectsSearchBar({ contentVisible, searchBarActive, setSearchQuery, searchBarQuery }) {

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const clearSearch = () =>{
        setSearchQuery('');
    }

    return (
        <>
            <div className={`mt-5 w-full max-w-[550px] h-14 border-white border-2 border-solid rounded-full transition-opacity duration-500 ease-in-out ${searchBarActive ? 'flex' : 'hidden'} justify-center ${contentVisible ? 'opacity-0' : 'opacity-100'}`}>
                <div className="relative w-full h-full">
                    <img src={SearchIcon} className="absolute left-5 top-[50%] -translate-y-[50%] w-12" />
                    <input
                        type="text"
                        placeholder="Search by project name or technology..."
                        value={searchBarQuery}
                        className="w-full h-full ps-20 font-theme-oxanium bg-white rounded-full focus:bg-gradient-to-tr from-gradient-blue to-gradient-purple focus:text-white focus:placeholder:text-white focus:outline-none"
                        onChange={handleInputChange}
                    />
                    <button onClick={clearSearch} className={`absolute right-3 top-[50%] -translate-y-[50%] w-8 ${searchBarQuery != '' ? 'inline' : 'hidden'}`}>
                        <img src={CloseIcon} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}
