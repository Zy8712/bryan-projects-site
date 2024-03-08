import { Link, Route, useLocation } from 'wouter';
import Space_Icon from "../../assets/icons/space-svgrepo-com.svg";

export default function Logo() {
    return (
        <>
            <Link to="/">
                <div className="h-24 flex items-center">
                    <img src={Space_Icon} alt="" className="hidden custom-sm:inline h-full mr-3" />
                    <span className="w-36 custom-sm:w-40 custom-sm-ex:w-[240px] text-white text-xl custom-sm:text-2xl font-semibold hover:text-teal-400">
                        Bryan's Projects
                    </span>
                </div>
            </Link>
        </>
    );
}