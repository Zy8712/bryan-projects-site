import UltimateProjectCard from "../project-card-components/UltimateProjectCard";
import personal_projects_data from "./general-project-filters/personal-projects.json";

export default function RenderCompleted() {
    return (
        <>
            <UltimateProjectCard data={personal_projects_data} />
        </>
    );
}
