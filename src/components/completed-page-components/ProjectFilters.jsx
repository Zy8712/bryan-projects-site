import React, { useState, useEffect, useRef } from 'react';

const ProjectFilters = React.memo(({ activeFilter, toggleFilter }) => {
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

    const filterOptions = [
        { iconClass: "las la-laptop-code", filterText: "Frontend Mentor Projects" },
        { iconClass: "las la-user", filterText: "Personal Projects" },
        { iconClass: "las la-meteor", filterText: "Recent Projects" },
        { iconClass: "las la-file-code", filterText: "HTML, CSS, SASS/SCSS ONLY" },
        { iconClass: "lab la-js-square", filterText: "Vanilla JS" },
        { iconClass: "lab la-react", filterText: "React" },
        { iconClass: "las la-wind", filterText: "Tailwind CSS" },
        { iconClass: "las la-file-alt", filterText: "JSON" },
        { iconClass: "las la-cog", filterText: "API" },
    ];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleFilterSelection = (index) => {
        toggleFilter(index);
        setDropdownOpen(false);
    };

    const renderFilterButtons = (options, startIndex) => {
        return options.map((filter, index) => (
            <button
                key={startIndex + index}
                aria-label={`${filter.filterText} Filter Option`}
                onClick={() => handleFilterSelection(startIndex + index)}
                className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter === (startIndex + index) ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}
            >
                <i className={`${filter.iconClass} mr-1`}></i>
                {filter.filterText}
            </button>
        ));
    };

    return (
        <div className="mt-10 w-auto custom-md:w-full flex flex-col items-center relative">
            <div className="my-1 hidden custom-md:flex justify-center flex-wrap">
                {renderFilterButtons(filterOptions.slice(0, 3), 0)}
            </div>
            <div className="my-1 hidden custom-md:flex justify-center flex-wrap">
                {renderFilterButtons(filterOptions.slice(3), 3)}
            </div>
            <div ref={dropdownRef} className={`mt-4 custom-md:hidden absolute z-50 -bottom-[365px] left-0 w-64 h-[360px] bg-white shadow-md overflow-hidden rounded-lg ${dropdownOpen ? 'block' : 'hidden'}`}>
                {filterOptions.map((filter, index) => (
                    <button
                        key={index}
                        aria-label={`${filter.filterText} Filter Option`}
                        onClick={() => handleFilterSelection(index)}
                        className={`block w-full py-2 font-medium hover:bg-gray-200 ${activeFilter === index ? 'text-white bg-gradient-to-tr from-filter-gradient-1 to-filter-gradient-2' : 'text-black'}`}
                    >
                        <i className={`${filter.iconClass} mr-2`}></i>
                        {filter.filterText}
                    </button>
                ))}
            </div>
            <button ref={buttonRef} onClick={toggleDropdown} className="mt-4 w-40 h-10 custom-md:hidden text-white border-white border-2 border-solid rounded-md">
                Filter Options <i className={`las ${dropdownOpen ? 'la-chevron-up' : 'la-chevron-down'} ml-1`}></i>
            </button>
        </div>
    );
});

export default ProjectFilters;