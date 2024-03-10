import upcoming_data from "./upcoming-projects.json";
import Info_Icon from '../../assets/info-svgrepo-com.svg';
import FrontendMentor from '../../assets/frontend-mentor-logo-transparent.png';
import ProjectPrimaryIcons from "./ProjectPrimaryIcons";

export default function RenderUpcoming() {
    return (
        <>
            {upcoming_data.map((item, index) => (
                <div className="group box w-[360px] custom-sm:w-[400px] h-[510px] custom-sm:h-[505px] overflow-hidden bg-white rounded-2xl 
                      border-none mb-8 cursor-pointer relative hover:shadow-2xl hover:shadow-white	" key={index}>

                    <div className="w-full h-[252.3px] custom-sm:h-[293.333333px] rounded-2xl overflow-hidden relative">
                        <img
                            src={item.preview_image}
                            alt="qr_code_preview"
                            className="w-full rounded-2xl duration-300 transform scale-100 group-hover:scale-108 transition-transform"
                        />
                    </div>

                    <div className={`h-[257.7px] custom-sm:h-[211.67px] text-white flex flex-col relative bg-gradient-to-b from-light-gray to-very-dark-blue`}>
                        <div className="mx-11 flex flex-col justify-between items-center text-center relative">
                            <span className="block mt-4 mb-3 text-2xl font-medium">{item.name}</span>
                            <p className="mb-3">{item.date}</p>
                            <div className="flex justify-center items-center">
                                <ProjectPrimaryIcons {...item.technologies} />
                            </div>
                            <div className={`w-[30px] ${item.frontend_mentor_project ? 'flex' : 'hidden'} flex-col absolute top-4 -right-9 
                    bg-white border-2 border-solid border-transparent rounded-full hover:bg-nav-gradient-1`}>
                                <a href={item.links.challenge_link} target="_blank">
                                    <img src={Info_Icon} alt="info_icon" className="mb-1" />
                                    <img src={FrontendMentor} alt="frontendmentor_icon" />
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-[50px] flex absolute bottom-0">
                            <div className="w-1/2 h-full flex justify-start items-center ml-11">
                                <a className="link-custom" href={item.links.github_link} target="_blank">
                                    <i className="lab la-github mr-1"></i>
                                    GitHub Repo
                                </a>
                            </div>
                            <div className="w-1/2 h-full flex justify-end items-center mr-11">
                                <a className="link-custom2" href={item.links.website_preview_link} target="_blank">
                                    <i className="las la-external-link-alt mr-1"></i>
                                    Preview
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
