import HTML_Icon from '../../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../../assets/language-icons/css3-svgrepo-com.svg';
import JavaScript_Icon from '../../assets/language-icons/javascript-svgrepo-com.svg';
import SASS_Icon from '../../assets/language-icons/scss2-svgrepo-com.svg';
import React_Icon from '../../assets/language-icons/react-1-logo-svgrepo-com.svg';
import Tailwind_Icon from '../../assets/language-icons/tailwind-svgrepo-com.svg';
import Bootstrap_Icon from '../../assets/language-icons/bootstrap-fill-svgrepo-com.svg';
import JSON_Icon from '../../assets/language-icons/json-official-svgrepo-com.svg';
import API_Icon from '../../assets/language-icons/api-svgrepo-com.svg';
import Wouter_Icon from '../../assets/other-icons/wouter-github-logo.svg';
import NextJS_Icon from '../../assets/language-icons/nextjs-fill-svgrepo-com.svg';
import Typescript_Icon from '../../assets/language-icons/typescript-icon-svgrepo-com.svg';
import Redux_Icon from '../../assets/language-icons/redux-svgrepo-com.svg';
import PostgreSql_Icon from '../../assets/language-icons/postgresql-svgrepo-com.svg';
import Figma_Icon from '../../assets/other-icons/figma-svgrepo-com.svg';

function ProjectPrimaryIcons(props) {

    const activeIconCount = Object.keys(props).filter(key => {
        const value = props[key];
        return typeof value === 'boolean' && value === true;
    }).length;

    const techIcons = [
        { iconImage: HTML_Icon, alt: "html5_icon", title: "HTML5", trueFalse: "html_TF" },
        { iconImage: CSS_Icon, alt: "css3_icon", title: "CSS3", trueFalse: "css_TF" },
        { iconImage: JavaScript_Icon, alt: "javascript_icon", title: "Javascript", trueFalse: "javascript_TF" },
        { iconImage: SASS_Icon, alt: "sass_icon", title: "SASS/SCSS", trueFalse: "sass_TF" },
        { iconImage: React_Icon, alt: "react_icon", title: "React", trueFalse: "react_TF" },
        { iconImage: Tailwind_Icon, alt: "tailwind_icon", title: "Tailwind CSS", trueFalse: "tailwindcss_TF" },
        { iconImage: Bootstrap_Icon, alt: "bootstrap_icon", title: "Bootstrap", trueFalse: "bootstrap_TF" },
        { iconImage: JSON_Icon, alt: "json_icon", title: "JSON", trueFalse: "json_TF" },
        { iconImage: API_Icon, alt: "api_icon", title: "API", trueFalse: "api_TF" },
        { iconImage: Wouter_Icon, alt: "wouter_icon", title: "Wouter", trueFalse: "wouter_TF" },
        { iconImage: NextJS_Icon, alt: "nextjs_icon", title: "NextJS", trueFalse: "nextjs_TF" },
        { iconImage: Typescript_Icon, alt: "typescript_icon", title: "Typescript", trueFalse: "typescript_TF" },
        { iconImage: Redux_Icon, alt: "redux_icon", title: "Redux", trueFalse: "redux_TF" },
        { iconImage: PostgreSql_Icon, alt: "postgresql_icon", title: "PostgreSql", trueFalse: "postgresql_TF" },
        { iconImage: Figma_Icon, alt: "figma_icon", title: "Figma", trueFalse: "figma_TF" },
    ];

    const renderIcons = () => {

        return techIcons.map((icon, index) => (
            <>
                <img
                    key={index}
                    src={icon.iconImage}
                    alt={icon.alt}
                    title={icon.title}
                    className={`w-[30px] ${(activeIconCount - 1) > 7 ? 'mx-[6px]' : 'mx-2'} ${props[icon.trueFalse] ? 'inline' : 'hidden'}`}
                />
                <div>
                    {props.html_TF}
                </div>
                {/** Subtract 1 from activeIconCount to take into account one of the boolean variables is 
                 *  frontendMentorTF, which isn't an icon and is just accidentially counted in the process above.
                 */}
            </>
        ));
    };

    return (
        <>
            {renderIcons()}
        </>
    );
};

export default ProjectPrimaryIcons;