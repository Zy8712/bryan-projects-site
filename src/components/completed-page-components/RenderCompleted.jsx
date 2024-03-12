import UltimateProjectCard from "../project-card-components/UltimateProjectCard";

import personal_projects_data from "./general-project-filters/personal-projects.json";
import recent_projects_data from "./general-project-filters/recent-projects.json";

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

export default function RenderCompleted({ activeFilter, activeFEMFilter, activeItemCount, toggleItemCount }) {

    const femProjectFilters = [featured_fem_projects_data, newbie_fem_projects_data, junior_fem_projects_data, intermediate_fem_projects_data, advanced_fem_projects_data, guru_fem_projects_data];

    const jsonData = getProjectData(activeFilter, activeFEMFilter);

    function getProjectData(activeFilter, activeFEMFilter) {
        if (activeFilter === 0) {
            toggleItemCount(Object.keys(femProjectFilters[activeFEMFilter]).length);            
            return femProjectFilters[activeFEMFilter];
        } else if (activeFilter === 1) {
            toggleItemCount(Object.keys(personal_projects_data).length);            
            return personal_projects_data;
        } else if (activeFilter === 2) {
            toggleItemCount(Object.keys(recent_projects_data).length);            
            return recent_projects_data; // Not sure what you intend here, but you can return appropriate data or handle this case as needed
        } else if (activeFilter === 3) {
            toggleItemCount(Object.keys(html_css_only_projects_data).length);            
            return html_css_only_projects_data;
        } else if (activeFilter === 4) {
            toggleItemCount(Object.keys(vanilla_js_projects_data).length);            
            return vanilla_js_projects_data;
        } else if (activeFilter === 5) {
            toggleItemCount(Object.keys(react_projects_data).length);            
            return react_projects_data;
        } else if (activeFilter === 6) {
            toggleItemCount(Object.keys(tailwindcss_projects_data).length);            
            return tailwindcss_projects_data;
        } else if (activeFilter === 7) {
            toggleItemCount(Object.keys(json_projects_data).length);            
            return json_projects_data;
        } else if (activeFilter === 8) {
            toggleItemCount(Object.keys(api_projects_data).length);            
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
