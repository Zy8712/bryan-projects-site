import { Link } from 'wouter';

export default function FeaturedBadgesBlock() {
    return (
        <>
            <div className="w-full custom-xl:w-[1200px] mt-10 bg-white bg-opacity-50 border-white border-4 border-solid rounded-lg px-2 custom-sm:px-3 sm:px-6 md:px-10 pb-1 custom-sm:pb-3 sm:pb-6 md:pb-8">

                <div className="w-full flex justify-between items-center text-white mt-2 sm:mt-4 mb-2 custom-sm:mb-3 custom-sm-ex:mb-4 sm:mb-6">
                    <h2 className="text-xl custom-sm:text-2xl custom-sm-ex:text-3xl sm:text-4xl uppercase font-bold font-theme-orbitron">
                        Badges
                    </h2>

                    <Link to='/badges' className="text-sm custom-sm:text-base custom-sm-ex:text-lg sm:text-xl font-bold font-theme-oxanium link-custom">
                        View All
                        <i className="las la-arrow-circle-right ml-2"></i>
                    </Link>
                </div>

                <div className="rounded-md overflow-hidden">
                    <a href="https://holopin.io/@bryanli712" target="_blank">
                        <img src="https://holopin.me/bryanli712" alt="@bryanli712's Holopin board" />
                    </a>
                </div>
            </div>
        </>
    );
}