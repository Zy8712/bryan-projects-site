import UltimateProjectCard from "../project-card-components/UltimateProjectCard";

import personal_projects_data from "./general-project-filters/personal-projects.json";

import featured_fem_projects_data from "./fem-project-filters/fem-featured-projects.json";
import newbie_fem_projects_data from "./fem-project-filters/fem-newbie-projects.json";
import junior_fem_projects_data from "./fem-project-filters/fem-junior-projects.json";
import intermediate_fem_projects_data from "./fem-project-filters/fem-intermediate-projects.json";
import advanced_fem_projects_data from "./fem-project-filters/fem-advanced-projects.json";
import guru_fem_projects_data from "./fem-project-filters/fem-guru-projects.json";

import html_css_only_projects_data from "./tech-project-filters/tech-html-css-only-projects.json";
import vanilla_js_projects_data from "./tech-project-filters/tech-vanilla-javascript-projects.json";
import react_projects_data from "./tech-project-filters/tech-react-projects.json";
import tailwindcss_projects_data from "./tech-project-filters/tech-tailwindcss-projects.json";
import json_projects_data from "./tech-project-filters/tech-json-projects.json";
import api_projects_data from "./tech-project-filters/tech-api-projects.json";

export default function RenderCompleted({ activeFilter, activeFEMFilter }) {

    const femProjectFilters = [featured_fem_projects_data, newbie_fem_projects_data, junior_fem_projects_data, intermediate_fem_projects_data, advanced_fem_projects_data, guru_fem_projects_data];

    const jsonData = getProjectData(activeFilter, activeFEMFilter);


    function getProjectData(activeFilter, activeFEMFilter) {
        if (activeFilter === 0) {
            return femProjectFilters[activeFEMFilter];
        } else if (activeFilter === 1) {
            return personal_projects_data;
        } else if (activeFilter === 2) {
            return ""; // Not sure what you intend here, but you can return appropriate data or handle this case as needed
        } else if (activeFilter === 3) {
            return html_css_only_projects_data;
        } else if (activeFilter === 4) {
            return vanilla_js_projects_data;
        } else if (activeFilter === 5) {
            return react_projects_data;
        } else if (activeFilter === 6) {
            return tailwindcss_projects_data;
        } else if (activeFilter === 7) {
            return json_projects_data;
        } else if (activeFilter === 8) {
            return api_projects_data;
        } else {
            return null; // Handle default case by returning null or appropriate value
        }
    }

    return (
        <>
            <UltimateProjectCard data={jsonData} />
        </>
    );
}
