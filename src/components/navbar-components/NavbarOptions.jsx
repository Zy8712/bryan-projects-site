import { Link, useLocation } from 'wouter';

export default function NavbarOptions() {

    const [location] = useLocation();

    return (
        <>
            <div className="w-[200px] custom-xl:w-[600px] h-12 flex justify-between items-center text-white text-lg font-semibold">
                <Link to="/featured" className={`flex items-center hover:text-teal-400 ${location === '/featured' ? 'text-rose-400 pointer-events-none' : ''}`}>
                    <i className="las la-star text-4xl custom-xl:text-2xl mr-2"></i>
                    <span className={`hidden custom-xl:inline ${location === '/featured' ? 'underline underline-offset-8' : ''}`}>Featured</span>
                </Link>
                <Link to="/completed" className={`flex items-center hover:text-teal-400 ${location === '/completed' ? 'text-rose-400 pointer-events-none' : ''}`}>
                    <i className="las la-check-circle text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${location === '/completed' ? 'underline underline-offset-8' : ''}`}>Completed</span>
                </Link>
                <Link to="/in-progress" className={`flex items-center hover:text-teal-400 ${location === '/in-progress' ? 'text-rose-400 pointer-events-none' : ''}`}>
                    <i className="las la-spinner text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${location === '/in-progress' ? 'underline underline-offset-8' : ''}`}>In Progress</span>
                </Link>
                <Link to="/upcoming" className={`flex items-center hover:text-teal-400 ${location === '/upcoming' ? 'text-rose-400 pointer-events-none' : ''}`}>
                    <i className="las la-calendar text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${location === '/upcoming' ? 'underline underline-offset-8' : ''}`}>Upcoming</span>
                </Link>
            </div>
        </>
    );
}