import React from "react";
import UltimateProjectCardV0 from "../../project-card-components/UltimateProjectCardV0";

import all_projects_data from "./all-projects.json";

export default function SearchBoxResults({ searchBarQuery }) {
    // Filter projects based on searchBarQuery
    const filteredProjects = all_projects_data.filter(project =>
        project.name.toLowerCase().includes(searchBarQuery.toLowerCase()) ||
        Object.keys(project.technologies).some(tech => project.technologies[tech] && tech.toLowerCase().includes(searchBarQuery.toLowerCase()))
    );

    // Check if searchBarQuery has at least two characters
    const shouldRenderResults = searchBarQuery.length >= 2;

    return (
        <>
            {shouldRenderResults && <UltimateProjectCardV0 data={filteredProjects} />}
        </>
    );
}
