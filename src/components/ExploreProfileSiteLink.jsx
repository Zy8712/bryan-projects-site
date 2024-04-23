
export default function ExploreProfileSite() {
    return (
        <>
            <div className="w-28 absolute bottom-9 right-0 hidden custom-xl:block">
                <a href="https://bryanli.vercel.app/" target="_blank"
                    className="relative group w-full h-full flex flex-col items-center text-center">
                    <img src="/rocket-ship-svgrepo-com.svg" alt="" className="w-20" />
                    <span className="absolute -bottom-8 w-32 font-extrabold text-xs leading-4 tracking-wider">
                        Explore My Profile Site
                    </span>
                    <img src="/external-link-svgrepo-com.svg" alt="" className="absolute top-0 right-1 z-30 w-5 h-5" />

                    <div className="absolute -top-3 -z-30 w-28 h-32 rounded-md group-hover:bg-black group-hover:bg-opacity-15"></div>
                </a>
            </div>
        </>
    );
}