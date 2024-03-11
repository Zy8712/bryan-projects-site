export default function ProjectFilters({ activeFilter, toggleFilter }) {

    const filterOptions1 = [
        { iconClass: "las la-laptop-code", filterText: "Frontend Mentor Projects" },
        { iconClass: "las la-user", filterText: "Personal Projects" },
        { iconClass: "las la-meteor", filterText: "Recent Projects" },
    ];

    const filterOptions2 = [
        { iconClass: "las la-file-code", filterText: "HTML, CSS, SASS/SCSS ONLY" },
        { iconClass: "lab la-js-square", filterText: "Vanilla JS" },
        { iconClass: "lab la-react", filterText: "React" },
        { iconClass: "las la-wind", filterText: "Tailwind CSS" },
        { iconClass: "las la-file-alt", filterText: "JSON" },
        { iconClass: "las la-cog", filterText: "API" },
    ];

    const renderFilters1 = () => {

        return filterOptions1.map((filter, index) => (
            <>
                <button aria-label={`${filter.filterText} Filter Option`} onClick={() => toggleFilter(index)}
                    className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == (index) ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                    <i className={`${filter.iconClass} mr-1`}></i>
                    {filter.filterText}
                </button>
            </>
        ));
    };

    const renderFilters2 = () => {

        return filterOptions2.map((filter, index) => (
            <>
                <button aria-label={`${filter.filterText} Filter Option`} onClick={() => toggleFilter(index + 3)}
                    className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == (index + 3) ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                    <i className={`${filter.iconClass} mr-1`}></i>
                    {filter.filterText}
                </button>
            </>
        ));
    };

    return (
        <>
            <div className="w-full flex flex-col items-center mb-10">
                <div className="my-1 flex justify-center flex-wrap">
                    {renderFilters1()}
                </div>
                <div className="my-1 flex justify-center flex-wrap">
                    {renderFilters2()}
                </div>
            </div>
        </>
    );
}