import upcoming_data from "../../upcoming-projects.json";

export default function RenderUpcoming() {
    return (
        <>
            {upcoming_data.map((item, index) => (
                <div></div>
            ))}
        </>
    );
}