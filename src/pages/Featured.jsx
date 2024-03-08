import FeaturedCredentialsBlock from "../components/featured-page-components/FeaturedCredentialsBlock";
import FeaturedCertificatesBlock from "../components/featured-page-components/FeaturedCertificatesBlock";
import FeaturedBadgesBlock from "../components/featured-page-components/FeaturedBadgesBlock";

export default function Featured() {
    return (
        <>
            <div className="w-full h-full min-h-screen flex justify-center pt-24 px-2 pb-14 transition-all duration-500 ease-in-out">
                <div className="w-full  max-w-[1200px] h-full flex flex-col items-center">

                    <h1 className="mt-8 text-white text-center text-5xl custom-sm:text-6xl sm:text-7xl md:text-8xl font-semibold font-theme-orbitron">
                        Featured
                    </h1>

                    <div className="w-full flex justify-center">
                        <FeaturedBadgesBlock />
                    </div>

                    <div className="w-full flex justify-center">
                        <FeaturedCredentialsBlock />
                    </div>

                    <div className="w-full flex justify-center">
                        <FeaturedCertificatesBlock />
                    </div>

                </div>
            </div>
        </>
    );
}