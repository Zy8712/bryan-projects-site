export default function ProjectWorkLinks(props) {
    return (
        <>
            <div className="w-full h-[50px] flex absolute bottom-0">
                <div className="w-1/2 h-full flex justify-start items-center ml-11">
                    <a className="link-custom" href={props.links.github_link} target="_blank">
                        <i className="lab la-github mr-1"></i>
                        GitHub Repo
                    </a>
                </div>
                <div className="w-1/2 h-full flex justify-end items-center mr-11">
                    <a className="link-custom2" href={props.links.website_preview_link} target="_blank">
                        <i className="las la-external-link-alt mr-1"></i>
                        Preview
                    </a>
                </div>
            </div>
        </>
    );
}