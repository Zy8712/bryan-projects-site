import StarSparkle from "../../assets/other-icons/stars-whitesparkle-svgrepo-com.svg";

export default function ProjectFEMFilter({ activeFilter, activeFEMFilter, toggleFEMFilter }) {
    const femLVLFilter = [
        { level: 1, text: "Newbie", buttonTextColour: "text-fem-newbie", buttonBorderColour: "border-fem-newbie", buttonBackgroundColour: "bg-fem-newbie" },
        { level: 2, text: "Junior", buttonTextColour: "text-fem-junior", buttonBorderColour: "border-fem-junior", buttonBackgroundColour: "bg-fem-junior" },
        { level: 3, text: "Intermediate", buttonTextColour: "text-fem-intermediate", buttonBorderColour: "border-fem-intermediate", buttonBackgroundColour: "bg-fem-intermediate" },
        { level: 4, text: "Advanced", buttonTextColour: "text-fem-advanced", buttonBorderColour: "border-fem-advanced", buttonBackgroundColour: "bg-fem-advanced" },
        { level: 5, text: "Guru", buttonTextColour: "text-fem-guru", buttonBorderColour: "border-fem-guru", buttonBackgroundColour: "bg-fem-guru" },
    ];

    const renderLVLFilters = () => {
        return femLVLFilter.map(({ level, text, buttonTextColour, buttonBorderColour, buttonBackgroundColour }, index) => (
            <button 
                key={level}
                aria-label={`${text} FEM Project Filter Option`} 
                onClick={() => toggleFEMFilter(level)}
                className={`mb-2 mx-1 border-2 border-solid ${buttonBorderColour} rounded-lg inline-flex justify-center overflow-hidden ${activeFEMFilter === level ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}
            >
                <span className={`px-2 py-2 ${buttonBackgroundColour} text-white text-base font-bold`}>
                    {level}
                </span>
                <span className={`px-2 py-2 bg-transparent ${buttonTextColour} text-base font-bold uppercase leading-normal`}>
                    {text}
                </span>
            </button>
        ));
    };

    return (
        <div className={`mt-10 w-[780px] font-theme-barlow ${activeFilter === 0 ? 'hidden custom-md:flex' : 'hidden'} flex-wrap justify-center`}>
            <button 
                aria-label={`Featured FEM Projects Filter Option`} 
                onClick={() => toggleFEMFilter(0)}
                className={`mx-2 mb-2 border-2 border-solid border-t-fem-featured-2 border-b-fem-featured-1 border-r-fem-featured-1 border-l-fem-featured-1 rounded-lg inline-flex justify-center overflow-hidden ${activeFEMFilter === 0 ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}
            >
                <span className="px-3 py-2 bg-gradient-to-t from-fem-featured-1 to-fem-featured-2">
                    <img src={StarSparkle} className="w-6 h-6" alt="Featured Icon" />
                </span>
                <span className="px-3 py-2 bg-transparent text-fem-featured-1 text-base font-bold uppercase leading-normal">
                    Featured
                </span>
            </button>
            {renderLVLFilters()}
        </div>
    );
};
