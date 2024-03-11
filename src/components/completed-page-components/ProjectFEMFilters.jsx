import StarSparkle from "../../assets/other-icons/stars-whitesparkle-svgrepo-com.svg";

export default function ProjectFEMFilter({ activeFilter, activeFEMFilter, toggleFEMFilter }) {

    const femLVLFilter = [
        { buttonTextColour: "text-fem-newbie", buttonBorderColour: "border-fem-newbie", buttonBackgroundColour: "bg-fem-newbie", levelText: "Newbie", levelNumber: "1" },
        { buttonTextColour: "text-fem-junior", buttonBorderColour: "border-fem-junior", buttonBackgroundColour: "bg-fem-junior", levelText: "Junior", levelNumber: "2" },
        { buttonTextColour: "text-fem-intermediate", buttonBorderColour: "border-fem-intermediate", buttonBackgroundColour: "bg-fem-intermediate", levelText: "Intermediate", levelNumber: "3" },
        { buttonTextColour: "text-fem-advanced", buttonBorderColour: "border-fem-advanced", buttonBackgroundColour: "bg-fem-advanced", levelText: "Advanced", levelNumber: "4" },
        { buttonTextColour: "text-fem-guru", buttonBorderColour: "border-fem-guru", buttonBackgroundColour: "bg-fem-guru", levelText: "Guru", levelNumber: "5" },
    ];

    const renderLVLFilters = () => {
        return femLVLFilter.map((filter, index) => (
            <>
                <button aria-label={`${filter.levelText} FEM Project Filter Option`} onClick={() => toggleFEMFilter(index + 1)}
                    className={`mb-2 mx-1 border-2 border-solid ${filter.buttonBorderColour} rounded-lg inline-flex justify-center overflow-hidden ${activeFEMFilter == (index + 1) ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}>
                    <span className={`px-2 py-2 ${filter.buttonBackgroundColour} text-white text-base font-bold`}>
                        {filter.levelNumber}
                    </span>
                    <span className={`px-2 py-2 bg-transparent ${filter.buttonTextColour} text-base font-bold uppercase leading-normal`}>
                        {filter.levelText}
                    </span>
                </button>
            </>
        ));
    };

    return (
        <>
            <div className={`w-[780px] font-theme-barlow ${activeFilter == 0 ? 'flex' : 'hidden'} flex-wrap justify-center`}>

                <button aria-label={`Featured FEM Projects Filter Option`} onClick={() => toggleFEMFilter(0)}
                    className={`mx-2 mb-2 border-2 border-solid border-t-fem-featured-2 border-b-fem-featured-1 border-r-fem-featured-1 border-l-fem-featured-1 rounded-lg inline-flex justify-center overflow-hidden ${activeFEMFilter == 1 ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}>
                    <span className="px-3 py-2 bg-gradient-to-t from-fem-featured-1 to-fem-featured-2">
                        <img src={StarSparkle} className="w-6 h-6" />
                    </span>
                    <span className="px-3 py-2 bg-transparent text-fem-featured-1 text-base font-bold uppercase leading-normal">
                        Featured
                    </span>
                </button>

                {renderLVLFilters()}

            </div>
        </>
    );
};
