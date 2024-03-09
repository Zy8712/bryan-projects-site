import RenderUpcoming from "../components/upcoming-page-components/RenderUpcoming";


export default function Upcoming() {
    return (
        <>
            <div className="w-full h-full min-h-screen flex justify-center pt-24 px-0 custom-sm:px-6 custom-lg:px-14 pb-14 transition-all duration-500 ease-in-out">
                <div className="w-full max-w-[1200px] h-full flex flex-col items-center">

                    <h1 className="mt-8 text-white text-center text-5xl custom-sm:text-6xl sm:text-7xl md:text-8xl font-semibold font-theme-orbitron">
                        Upcoming
                    </h1>

                    <div className="mt-20 w-full flex flex-wrap justify-around gap-4 text-center text-white font-theme-oxanium">
                        <RenderUpcoming />
                    </div>

                </div>
            </div>
        </>
    );
}