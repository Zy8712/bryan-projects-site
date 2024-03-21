import { Link, useLocation } from 'wouter';

export default function NavbarOptions() {

    const [location] = useLocation();

    return (
        <>
            <div className="w-[200px] custom-xl:w-[600px] h-12 flex justify-between items-center text-white text-lg font-semibold">
                <Link to="/featured" className={`flex items-center hover:text-violet-500 ${location === '/featured' ? 'text-blue-500 pointer-events-none' : ''}`}>
                    <i className="las la-star text-4xl custom-xl:text-2xl mr-2"></i>
                    <span className={`hidden custom-xl:inline ${location === '/featured' ? 'underline underline-offset-8' : ''}`}>Featured</span>
                </Link>
                <Link to="/completed" className={`flex items-center hover:text-violet-500 ${location === '/completed' ? 'text-blue-500 pointer-events-none' : ''}`}>
                    <i className="las la-check-circle text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${location === '/completed' ? 'underline underline-offset-8' : ''}`}>Completed</span>
                </Link>
                <Link to="/in-progress" className={`flex items-center hover:text-violet-500 ${location === '/in-progress' ? 'text-blue-500 pointer-events-none' : ''}`}>
                    <i className="las la-spinner text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${location === '/in-progress' ? 'underline underline-offset-8' : ''}`}>In Progress</span>
                </Link>
                <Link to="/upcoming" className={`flex items-center hover:text-violet-500 ${location === '/upcoming' ? 'text-blue-500 pointer-events-none' : ''}`}>
                    <i className="las la-calendar text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${location === '/upcoming' ? 'underline underline-offset-8' : ''}`}>Upcoming</span>
                </Link>
            </div>
        </>
    );
}