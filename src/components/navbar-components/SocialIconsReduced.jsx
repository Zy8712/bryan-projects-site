import GitHub from '../../assets/social-icons/github-142-svgrepo-com.svg';
import LinkedIn from '../../assets/social-icons/linkedin-svgrepo-com.svg';
import Credly from '../../assets/social-icons/credly-svgrepo-com.svg';
import FrontendMentor from '../../assets/social-icons/frontendmentor-svgrepo-com.svg';
import LeetCode from '../../assets/social-icons/leetcode-svgrepo-com.svg';
import Sololearn from '../../assets/social-icons/sololearn-svgrepo-com.svg';

export default function SocialIcons() {
    return (
        <>
            <div className="w-64 h-full flex justify-between items-center">
                <a href="https://github.com/Zy8712" target="_blank">
                    <img src={GitHub} alt="github_icon" title="GitHub" className="w-7 hover:cursor-pointer hover:scale-125" />
                </a>
                <a href="https://www.linkedin.com/in/bryan-li712/" target="_blank">
                    <img src={LinkedIn} alt="linkedin_icon" title="LinkedIn" className="w-8 hover:cursor-pointer hover:scale-125" />
                </a>
                <a href="https://www.credly.com/users/bryan-li712" target="_blank">
                    <img src={Credly} alt="credly_icon" title="Credly" className="w-7 hover:cursor-pointer hover:scale-125" />
                </a>
                <a href="https://www.frontendmentor.io/profile/Zy8712" target="_blank">
                    <img src={FrontendMentor} alt="credly_icon" title="Frontend Mentor" className="w-7 hover:cursor-pointer hover:scale-125" />
                </a>
                <a href="https://leetcode.com/Zy8712/" target="_blank">
                    <img src={LeetCode} alt="leetcode_icon" title="LeetCode" className="w-7 hover:cursor-pointer hover:scale-125" />
                </a>
                <a href="https://www.sololearn.com/en/profile/31735834" target="_blank">
                    <img src={Sololearn} alt="sololearn_icon" title="Sololearn" className="w-8 hover:cursor-pointer hover:scale-125" />
                </a>
            </div>
        </>
    );
}