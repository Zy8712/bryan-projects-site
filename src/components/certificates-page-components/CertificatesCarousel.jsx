import React, { useState, useEffect } from 'react';
import certificatesData from "../../certificates_data.json";

export default function CertificatesCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showNavigation, setShowNavigation] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Set the images state with the data from the JSON file
        setImages(certificatesData);
    }, []);

    const featuredImages = images.filter((image) => image.featured);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % featuredImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImageIndex, featuredImages.length]);


    const navigateTo = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="w-[360px] custom-sm:w-[400px] sm:w-[640px] h-[280px] custom-sm:h-[310px] sm:h-[494.5px] flex justify-center">
            <div className="relative w-full h-full flex justify-center rounded-md">
                {featuredImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.preview_image}
                        alt={`Carousel Image ${index}`}
                        className="absolute w-full h-auto sm:h-full rounded-md transition-opacity ease-in-out duration-1000"
                        style={{ opacity: index === currentImageIndex ? 1 : 0, zIndex: index === currentImageIndex ? 1 : 0 }}
                    />
                ))}

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {featuredImages.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 w-3 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            onClick={() => navigateTo(index)}
                        />
                    ))}
                </div>

                <div
                    className="absolute z-50 inset-y-0 flex items-center justify-between w-[365px] custom-sm:w-[450px] sm:w-[700px] px-0"
                    onMouseEnter={() => setShowNavigation(true)}
                    onMouseLeave={() => setShowNavigation(false)}
                >
                    {showNavigation && (
                        <>
                            <button
                                onClick={() =>
                                    setCurrentImageIndex(
                                        (currentImageIndex - 1 + featuredImages.length) % featuredImages.length
                                    )
                                }
                                className="w-10 h-10 text-white bg-white bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none"
                            >
                                <i className="las la-angle-left"></i>
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentImageIndex((currentImageIndex + 1) % featuredImages.length)
                                }
                                className="w-10 h-10 text-white bg-white bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none"
                            >
                                <i className="las la-angle-right"></i>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
