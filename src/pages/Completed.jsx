import { useState } from "react";

import ProjectFilters from "../components/completed-page-components/ProjectFilters";
import ProjectFEMFilters from "../components/completed-page-components/ProjectFEMFilters";
import RenderCompleted from "../components/completed-page-components/RenderCompleted";

export default function Completed() {

    const [activeFilter, setActiveFilter] = useState(0);

    const toggleFilter = (num) => {
        if (num != activeFilter) {
            setActiveFilter(num);
        }
    }

    const [activeFEMFilter, setActiveFEMFilter] = useState(0);

    const toggleFEMFilter = (num) => {
        if (num != activeFEMFilter) {
            setActiveFEMFilter(num);
        }
    }

    return (
        <>
            <div className="w-full h-full min-h-screen flex justify-center pt-24 px-0 custom-sm:px-6 custom-lg:px-8 pb-14 transition-all duration-500 ease-in-out">
                <div className="w-full max-w-[1400px] h-full flex flex-col items-center">

                    <h1 className="mt-8 mb-10 text-white text-center text-5xl custom-sm:text-6xl sm:text-7xl md:text-8xl font-semibold font-theme-orbitron">
                        Completed
                    </h1>

                    <ProjectFilters
                        activeFilter={activeFilter}
                        toggleFilter={toggleFilter}
                    />

                    <ProjectFEMFilters
                        activeFilter={activeFilter}
                        activeFEMFilter={activeFEMFilter}
                        toggleFEMFilter={toggleFEMFilter}
                    />

                    <div className="mt-20 w-full flex flex-wrap justify-around gap-4 text-center text-white font-theme-oxanium">
                        <RenderCompleted activeFilter={activeFilter} activeFEMFilter={activeFEMFilter} />
                    </div>

                </div>
            </div>
        </>
    );
}