import Logo from "./navbar-components/Logo";
import NavbarOptions from "./navbar-components/NavbarOptions";
import SocialIconsReduced from "./navbar-components/SocialIconsReduced";

export default function Navbar() {
    return (
        <>
            <div className="absolute z-50 w-screen h-20 custom-sm:h-24 px-3 md:px-8 custom-lg:px-10 lg:px-12 custom-xl:px-14 xl:px-16 bg-white bg-opacity-15 font-theme-orbitron transition-all duration-500 ease-in-out">

                <div className="w-full h-full flex justify-between items-center">

                    <Logo />

                    <NavbarOptions />

                    <div className="hidden xl:flex">
                        <SocialIconsReduced />
                    </div>

                </div>

            </div>
        </>
    );
}