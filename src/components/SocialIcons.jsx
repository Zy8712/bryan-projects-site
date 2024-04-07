import GitHub from '../assets/social-icons/github-142-svgrepo-com.svg';
import LinkedIn from '../assets/social-icons/linkedin-svgrepo-com.svg';
import Credly from '../assets/social-icons/credly-svgrepo-com.svg';
import FrontendMentor from '../assets/social-icons/frontendmentor-svgrepo-com.svg';
import LeetCode from '../assets/social-icons/leetcode-svgrepo-com.svg';
import Sololearn from '../assets/social-icons/sololearn-svgrepo-com.svg';
import FreeCodeCamp from '../assets/social-icons/freecodecamp-svgrepo-com.svg';
import Medium from '../assets/social-icons/medium-svgrepo-com.svg';

export default function SocialIcons() {
    return (
        <>
            <a href="https://github.com/Zy8712" target="_blank">
                <img src={GitHub} alt="github_icon" title="GitHub" className="w-[32px] hover:cursor-pointer hover:scale-125" />
            </a>
            <a href="https://www.linkedin.com/in/bryan-li712/" target="_blank">
                <img src={LinkedIn} alt="linkedin_icon" title="LinkedIn" className="w-[40px] hover:cursor-pointer hover:scale-125" />
            </a>
            <a href="https://www.credly.com/users/bryan-li712" target="_blank">
                <img src={Credly} alt="credly_icon" title="Credly" className="w-[32px] hover:cursor-pointer hover:scale-125" />
            </a>
            <a href="https://www.frontendmentor.io/profile/Zy8712" target="_blank">
                <img src={FrontendMentor} alt="credly_icon" title="Frontend Mentor" className="w-[32px] hover:cursor-pointer hover:scale-125" />
            </a>
            <a href="https://leetcode.com/Zy8712/" target="_blank">
                <img src={LeetCode} alt="leetcode_icon" title="LeetCode" className="w-[32px] hover:cursor-pointer hover:scale-125" />
            </a>
            <a href="https://www.sololearn.com/en/profile/31735834" target="_blank">
                <img src={Sololearn} alt="sololearn_icon" title="Sololearn" className="w-[32px] hover:cursor-pointer hover:scale-125" />
            </a>
            <a href="https://www.freecodecamp.org/bryan-li712" target="_blank">
                <img src={FreeCodeCamp} alt="freecodecamp_icon" title="freeCodeCamp" className="w-[32px] hover:cursor-pointer hover:scale-125" />
            </a>
            <a href="https://medium.com/@bryan-li712" target="_blank">
                <img src={Medium} alt="medium_icon" title="Medium" className="w-[32px] hover:cursor-pointer hover:scale-125" />
            </a>
        </>
    );
}