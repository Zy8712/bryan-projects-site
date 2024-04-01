import React, { useEffect, useState, useRef } from "react";
import ProjectPreview from "./ProjectPreview";
import ProjectDetails from "./ProjectDetails";
import ProjectPrimaryIcons from "./ProjectPrimaryIcons";
import ProjectWorkLinks from "./ProjectWorkLinks";

export default function UltimateProjectCard({ data }) {
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [loadedProjects, setLoadedProjects] = useState(12);
    const observer = useRef();

    useEffect(() => {
        const handleObserver = (entries) => {
            const target = entries[0];
            if (target.isIntersecting && loadedProjects < data.length) {
                setLoadedProjects(prevLoadedProjects => prevLoadedProjects + 6);
            }
        };

        observer.current = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        });

        const target = document.querySelector(".load-more-trigger");
        if (target) {
            observer.current.observe(target);
        }

        return () => {
            if (target) {
                observer.current.unobserve(target);
            }
        };
    }, [loadedProjects, data]);

    useEffect(() => {
        setVisibleProjects(data.slice(0, loadedProjects));
    }, [data, loadedProjects]);

    // Reset loadedProjects to 12 when data changes
    useEffect(() => {
        setLoadedProjects(12);
    }, [data]);

    return (
        <>
            {visibleProjects.map((item, index) => (
                <div
                    className="group box w-[360px] custom-sm:w-[400px] h-[470px] custom-sm:h-[505px] overflow-hidden font-theme-rubik bg-white rounded-2xl border-none mb-8 cursor-pointer relative hover:shadow-2xl hover:shadow-white"
                    key={index}
                >
                    <div className="w-full h-[252.3px] custom-sm:h-[293.333333px] rounded-2xl overflow-hidden relative">
                        <ProjectPreview {...item} />
                    </div>

                    <div className={`h-[217.7px] custom-sm:h-[211.67px] text-white flex flex-col relative bg-gradient-to-b from-light-gray to-very-dark-blue`}>
                        <ProjectDetails {...item}>
                            <ProjectPrimaryIcons {...item.technologies} />
                        </ProjectDetails>

                        <ProjectWorkLinks {...item} />
                    </div>
                </div>
            ))}
            <div className="load-more-trigger absolute bottom-0 right-0"></div>
        </>
    );
}
