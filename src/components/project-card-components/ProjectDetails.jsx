import Info_Icon from '../../assets/info-svgrepo-com.svg';
import FrontendMentor from '../../assets/frontend-mentor-logo-transparent.png';

export default function ProjectDetails(props) {
    return (
        <>
            <div className="w-full flex flex-col justify-between items-center px-6 custom-sm:px-11 text-center relative">
                <span className="block mt-4 mb-2 text-2xl font-medium">{props.name}</span>
                <p className="mb-4">
                    {props.project_status}:&nbsp;
                    {props.date}&nbsp;
                    <span className={`${props.trial > 0 ? 'inline' : 'hidden'}`}>
                        [Trial #{props.trial}]
                    </span>
                </p>

                <div className="flex justify-center items-center">
                    {props.children}
                </div>

                <div className={`w-[30px] ${props.frontend_mentor_project ? 'flex' : 'hidden'} flex-col absolute top-4 right-[2px] custom-sm:right-2 
                bg-white border-2 border-solid border-transparent rounded-full hover:bg-nav-gradient-1`}>
                    <a href={props.links.challenge_link} target="_blank">
                        <img src={Info_Icon} alt="info_icon" className="mb-1" />
                        <img src={FrontendMentor} alt="frontendmentor_icon" />
                    </a>
                </div>
            </div >

        </>
    );
}