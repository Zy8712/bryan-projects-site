import React from "react";
import SearchIcon from "../../../assets/icons/browser-search-svgrepo-com.svg";

export default function ProjectsSearchBar({ toggleSearchBarActive, setSearchQuery }) {

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFocus = () => {
        toggleSearchBarActive(true);
    };

    const handleBlur = () => {
        toggleSearchBarActive(false);
    };

    return (
        <>
            <div className="mt-8 w-full max-w-[550px] h-14 border-white border-2 border-solid rounded-full overflow-hidden">
                <div className="relative w-full h-full">
                    <img src={SearchIcon} className="absolute left-5 top-[50%] -translate-y-[50%] w-12" />
                    <input 
                        type="text" 
                        placeholder="Search by project name..." 
                        className="w-full h-full ps-20 font-theme-oxanium bg-white rounded-full focus:bg-gradient-to-tr from-gradient-blue to-gradient-purple focus:text-white focus:placeholder:text-white focus:outline-none" 
                        onChange={handleInputChange}
                        onFocus={handleFocus} 
                        onBlur={handleBlur} 
                    />
                </div>
            </div>
        </>
    );
}
