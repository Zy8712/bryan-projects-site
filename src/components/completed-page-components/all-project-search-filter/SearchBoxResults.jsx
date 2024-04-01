import React from "react";
import UltimateProjectCard from "../../project-card-components/UltimateProjectCard";

import all_projects_data from "./all-projects.json";

export default function SearchBoxResults({ searchBarQuery }) {
    // Filter projects based on searchBarQuery
    const filteredProjects = all_projects_data.filter(project =>
        project.name.toLowerCase().includes(searchBarQuery.toLowerCase())
    );

    return (
        <>
            <UltimateProjectCard data={filteredProjects} />
        </>
    );
}
