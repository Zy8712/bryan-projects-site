import ProjectPreview from "./ProjectPreview";
import ProjectDetails from "./ProjectDetails";
import ProjectPrimaryIcons from "./ProjectPrimaryIcons";
import ProjectWorkLinks from "./ProjectWorkLinks";

export default function UltimateProjectCard({data}){
    return(
        <>
            {data.map((item, index) => (
                <div className="group box w-[360px] custom-sm:w-[400px] h-[510px] custom-sm:h-[505px] overflow-hidden bg-white rounded-2xl 
                      border-none mb-8 cursor-pointer relative hover:shadow-2xl hover:shadow-white" key={index}>

                    <div className="w-full h-[252.3px] custom-sm:h-[293.333333px] rounded-2xl overflow-hidden relative">
                        <ProjectPreview {...item} />
                    </div>

                    <div className={`h-[257.7px] custom-sm:h-[211.67px] text-white flex flex-col relative bg-gradient-to-b from-light-gray to-very-dark-blue`}>

                        <ProjectDetails {...item}>
                            <ProjectPrimaryIcons {...item.technologies} />
                        </ProjectDetails>

                        <ProjectWorkLinks {...item} />

                    </div>
                </div>
            ))}
        </>
    );
}