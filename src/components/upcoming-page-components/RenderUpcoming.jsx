import UltimateProjectCard from "../project-card-components/UltimateProjectCard";
import upcoming_data from "./upcoming-projects.json";

export default function RenderUpcoming() {
    return (
        <>
            <UltimateProjectCard data={upcoming_data} />
        </>
    );
}
