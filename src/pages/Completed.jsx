import React, { useState, useEffect } from 'react';

import ProjectFilters from "../components/completed-page-components/ProjectFilters";
import ProjectFEMFilters from "../components/completed-page-components/ProjectFEMFilters";
import RenderCompleted from "../components/completed-page-components/RenderCompleted";

import ProjectsSearchBar from "../components/completed-page-components/all-project-search-filter/ProjectsSearchBar";
import SearchBoxResults from "../components/completed-page-components/all-project-search-filter/SearchBoxResults";
import SearchOrFilterToggle from '../components/completed-page-components/SearchOrFilterToggle';

export default function Completed() {

    const [activeFilter, setActiveFilter] = useState(0);
    const toggleFilter = (num) => {
        if (num !== activeFilter) {
            setActiveFilter(num);
        }
    }

    const [activeFEMFilter, setActiveFEMFilter] = useState(0);
    const toggleFEMFilter = (num) => {
        if (num !== activeFEMFilter) {
            setActiveFEMFilter(num);
        }
    }

    const [activeItemCount, setActiveItemCount] = useState(0);
    const toggleItemCount = (num) => {
        if (num !== activeItemCount) {
            setActiveItemCount(num);
        }
    }

    const [searchBarActive, setSearchBarActive] = useState(false);
    const [searchBarQuery, setSearchQuery] = useState("");

    const [contentVisible, setContentVisible] = useState(true);

    function toggleSearchBarActive() {
        // if search bar is currently true and is being switched to false
        if (searchBarActive) {
            setContentVisible(true);
            const timer = setTimeout(() => {
                setSearchBarActive(false);
            }, 400); // Wait for 1 second before hiding content
            return () => clearTimeout(timer); // Clear timeout on component unmount or state change
        }

        // if search bar is currently false and is being switched to true
        else {
            setContentVisible(false);
            const timer = setTimeout(() => {
                setSearchBarActive(true);
            }, 400); // Wait for 1 second before hiding content
            return () => clearTimeout(timer); // Clear timeout on component unmount or state change
        }
    }

    return (
        <>
            <div className="w-full h-full min-h-screen flex justify-center pt-24 px-0 custom-sm:px-6 custom-lg:px-8 pb-14 transition-all duration-500 ease-in-out">
                <div className="w-full max-w-[1400px] h-full flex flex-col items-center">

                    <h1 className="mt-8 text-white text-center text-5xl custom-sm:text-6xl sm:text-7xl md:text-8xl font-semibold font-theme-orbitron">
                        Completed
                    </h1>


                    <SearchOrFilterToggle
                        toggleSearchBarActive={toggleSearchBarActive}
                        searchBarActive={searchBarActive}
                    />

                    <ProjectsSearchBar
                        contentVisible={contentVisible}
                        searchBarActive={searchBarActive}
                        setSearchQuery={setSearchQuery}
                        searchBarQuery={searchBarQuery}
                    />

                    <div className={`mt-5 w-[340px] custom-md:w-full ${contentVisible ? 'flex' : 'hidden'} flex-row custom-md:flex-col transition-opacity duration-500 ease-in-out ${searchBarActive ? 'opacity-0' : 'opacity-100'} ${activeFilter === 0 ? 'justify-between custom-md:justify-normal' : 'justify-center'} items-center`}>
                        <ProjectFilters
                            activeFilter={activeFilter}
                            toggleFilter={toggleFilter}
                        />

                        <ProjectFEMFilters
                            activeFilter={activeFilter}
                            activeFEMFilter={activeFEMFilter}
                            toggleFEMFilter={toggleFEMFilter}
                        />
                    </div>

                    <div className={`mt-6 w-full transition-opacity duration-500 ease-in-out ${searchBarActive ? 'opacity-0' : 'opacity-100'} ${contentVisible ? 'flex' : 'hidden'} justify-center text-center text-white font-theme-rubik uppercase font-semibold text-2xl`}>
                        <p>{activeItemCount} Results for Selected Filter</p>
                    </div>

                    <div className={`mt-8 w-full transition-opacity duration-500 ease-in-out ${searchBarActive ? 'opacity-0' : 'opacity-100'} ${contentVisible ? 'flex' : 'hidden'} flex-wrap justify-around gap-4 text-center text-white font-theme-oxanium`}>
                        <RenderCompleted activeFilter={activeFilter} activeFEMFilter={activeFEMFilter} activeItemCount={activeItemCount} toggleItemCount={toggleItemCount} />
                    </div>

                    <div className={`mt-12 relative w-full transition-opacity duration-500 ease-in-out ${searchBarActive ? 'opacity-100' : 'opacity-0'} ${contentVisible ? 'hidden' : 'flex'} flex-wrap justify-around gap-4`}>
                        <p className={`text-white font-theme-rubik font-semibold text-2xl text-center ${searchBarQuery == '' ? 'block' : 'hidden'}`}>
                            Search Mode Active. <br />Start typing to search or close using the exit button.
                        </p>
                        <SearchBoxResults searchBarQuery={searchBarQuery} />
                    </div>

                </div>
            </div>
        </>
    );
}
