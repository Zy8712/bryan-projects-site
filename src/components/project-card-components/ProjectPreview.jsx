import { useState } from 'react';

export default function ProjectPreview(props) {

    const SkeletonLoader = () => (
        <div className="animate-pulse w-full h-full bg-gradient-to-t from-white to-gray-500"></div>
    );

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <SkeletonLoader />}
            <img
                src={props.preview_image}
                alt="qr_code_preview"
                className="w-full duration-300 transform scale-100 group-hover:scale-108 transition-transform"
                onLoad={handleImageLoad}
            />
        </>
    );
}