
export default function ExploreCertsLink() {
    return (
        <>
            <div className="w-28 absolute bottom-8 left-2 hidden custom-xl:block">
                <a href="https://bryan-certificates-site.vercel.app/" target="_blank"
                    className="relative group w-full h-full flex flex-col items-center text-center">
                    <img src="/space-svgrepo-com.svg" alt="" className="w-24" />
                    <span className="absolute -bottom-6 w-32 font-extrabold text-xs leading-4 tracking-wider">
                        Explore My Certificates Site
                    </span>
                    <img src="/external-link-svgrepo-com.svg" alt="" className="absolute top-4 right-0 z-30 w-5 h-5" />

                    <div className="absolute top-2 -z-30 w-[126px] h-[116px] rounded-md group-hover:bg-black group-hover:bg-opacity-15"></div>
                </a>
            </div>
        </>
    );
}