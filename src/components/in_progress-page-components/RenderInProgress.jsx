import UltimateProjectCard from "../project-card-components/UltimateProjectCard";
import in_progress_data from "./in-progress-projects.json";

export default function RenderInProgress() {
    return (
        <>
            <UltimateProjectCard data={in_progress_data} />
        </>
    );
}
