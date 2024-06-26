import React, { useState, useEffect, useRef } from 'react';
import StarSparkle from "../../assets/other-icons/stars-whitesparkle-svgrepo-com.svg";

export default function ProjectFEMFilter({ activeFilter, activeFEMFilter, toggleFEMFilter }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Ignore clicks on the dropdown button
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 850) {
                setDropdownOpen(false);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const femLVLFilter = [
        { level: 1, text: "Newbie", buttonTextColour: "text-fem-newbie", buttonBorderColour: "border-fem-newbie", buttonBackgroundColour: "bg-fem-newbie" },
        { level: 2, text: "Junior", buttonTextColour: "text-fem-junior", buttonBorderColour: "border-fem-junior", buttonBackgroundColour: "bg-fem-junior" },
        { level: 3, text: "Intermediate", buttonTextColour: "text-fem-intermediate", buttonBorderColour: "border-fem-intermediate", buttonBackgroundColour: "bg-fem-intermediate" },
        { level: 4, text: "Advanced", buttonTextColour: "text-fem-advanced", buttonBorderColour: "border-fem-advanced", buttonBackgroundColour: "bg-fem-advanced" },
        { level: 5, text: "Guru", buttonTextColour: "text-fem-guru", buttonBorderColour: "border-fem-guru", buttonBackgroundColour: "bg-fem-guru" },
    ];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleFilterSelection = (index) => {
        toggleFilter(index);
        setDropdownOpen(false);
    };

    const renderLVLFilters = () => {
        return femLVLFilter.map(({ level, text, buttonTextColour, buttonBorderColour, buttonBackgroundColour }, index) => (
            <button
                key={level}
                aria-label={`${text} FEM Project Filter Option`}
                onClick={() => toggleFEMFilter(level)}
                className={`mb-2 mx-1 border-2 border-solid ${buttonBorderColour} rounded-lg inline-flex justify-center overflow-hidden ${activeFEMFilter === level ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}
            >
                <span className={`px-2 py-2 ${buttonBackgroundColour} text-white text-base font-bold`}>
                    {level}
                </span>
                <span className={`px-2 py-2 bg-black bg-opacity-60 ${buttonTextColour} text-base font-extrabold uppercase leading-normal`}>
                    {text}
                </span>
            </button>
        ));
    };

    return (
        <>
            <div className={`mt-5 w-[780px] font-theme-barlow ${activeFilter === 0 ? 'hidden custom-md:flex' : 'hidden'} flex-wrap justify-center`}>
                <button
                    aria-label={`Featured FEM Projects Filter Option`}
                    onClick={() => toggleFEMFilter(0)}
                    className={`mx-2 mb-2 border-2 border-solid border-t-fem-featured-2 border-b-fem-featured-1 border-r-fem-featured-1 border-l-fem-featured-1 rounded-lg inline-flex justify-center overflow-hidden ${activeFEMFilter === 0 ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}
                >
                    <span className="px-3 py-2 bg-gradient-to-t from-fem-featured-1 to-fem-featured-2">
                        <img src={StarSparkle} className="w-6 h-6" alt="Featured Icon" />
                    </span>
                    <span className="px-3 py-2 bg-black bg-opacity-60 text-fem-featured-1 text-base font-extrabold uppercase leading-normal">
                        Featured
                    </span>
                </button>
                {renderLVLFilters()}
            </div>

            {/** Mobile Filter */}
            <div className={`relative w-40 h-auto font-theme-barlow ${activeFilter === 0 ? 'flex' : 'hidden'}`}>
                <div ref={dropdownRef} className={`custom-md:hidden absolute z-50 top-full left-0 w-40 h-[240px] bg-white shadow-md overflow-hidden rounded-lg ${dropdownOpen ? 'flex flex-col' : 'hidden'}`}>
                    <button
                        aria-label={`Featured FEM Projects Filter Option`}
                        onClick={() => toggleFEMFilter(0)}
                        className={`my-0 w-full h-10 flex items-center bg-gradient-to-tr from-fem-featured-1 to-fem-featured-2 font-semibold overflow-hidden ${activeFEMFilter === 0 ? '' : 'opacity-50 hover:opacity-100'}`}
                    >
                        <span className={`px-3 text-white text-base `}>
                            <img src={StarSparkle} className="w-4 h-4" alt="Featured Icon" />
                        </span>
                        <span className={`bg-transparent text-white text-base leading-normal`}>
                            Featured
                        </span>
                    </button>

                    {femLVLFilter.map((filter, index) => (
                        <button
                            key={filter.level}
                            aria-label={`${filter.text} FEM Project Filter Option`}
                            onClick={() => toggleFEMFilter(filter.level)}
                            className={`my-0 w-full h-10 flex items-center ${filter.buttonBackgroundColour} font-semibold overflow-hidden ${activeFEMFilter === filter.level ? 'border-white border-2 border-solid' : 'opacity-30 hover:opacity-70'}`}
                        >
                            <span className={`px-4 text-white text-base`}>
                                {filter.level}
                            </span>
                            <span className={`bg-transparent text-white text-base leading-normal`}>
                                {filter.text}
                            </span>
                        </button>
                    ))}
                </div>
                <button ref={buttonRef} onClick={toggleDropdown} className="w-40 h-10 custom-md:hidden text-white border-white border-2 border-solid rounded-md">
                    FEM Difficulty <i className={`las ${dropdownOpen ? 'la-chevron-up' : 'la-chevron-down'} ml-1`}></i>
                </button>
            </div>
        </>
    );
};
