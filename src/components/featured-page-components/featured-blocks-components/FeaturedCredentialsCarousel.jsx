import React, { useState, useEffect } from 'react';
import credentialData from "../../../credentials_data.json";

const FeaturedCredentialsCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([]);


    const [endIndex, setEndIndex] = useState(3); // Set ending index for carousel items

    // SCREEN RESIZE. CARD LOAD COUNT CHANGED.
    // Alters the number of cards loaded upon site load and the number of cards loaded each time (via. infinite scrolling) we react the bottom of the page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1140) {
                setEndIndex(4); // Update visible cards count for larger screens
            } else if(window.innerWidth <= 1139 && window.innerWidth >= 890) {
                setEndIndex(3); 
            }
            else if (window.innerWidth <= 889 && window.innerWidth >= 630){
                setEndIndex(2);
            }
            else{
                setEndIndex(1);  // Default value for small screens
            }
        };

        // Initial call to set the correct visible cards count based on screen size
        handleResize();

        // Add event listener to update visible cards count when the window is resized
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that this effect runs only once after initial render


    useEffect(() => {
        // Set the images state with the data from the JSON file
        setImages(credentialData);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [currentImageIndex, images.length]);

    const renderImages = () => {
        const lastIndex = images.length - 1;
        let startIndex = currentImageIndex % images.length;

        // Adjust start index if nearing the end
        if (startIndex === lastIndex || startIndex === lastIndex - 1) {
            startIndex = lastIndex - 3;
        }

        // Ensure positive index
        startIndex = Math.max(0, startIndex);

        return images.slice(startIndex, startIndex + endIndex).map((image, index) => (
            <img
                key={startIndex + index}
                src={image.preview_image}
                alt={`Carousel Image ${startIndex + index}`}
                className="w-64 h-64 rounded-lg transition-opacity ease-in-out duration-1000"
            />
        ));
    };

    const navigateTo = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center relative">
            <div className={`w-full h-64 flex  ${endIndex === 1 ? 'justify-center' : endIndex === 2 ? 'justify-around' : 'justify-between'}`}>
                {renderImages()}

                <div className="absolute z-50 -bottom-8 left-1/2 transform -translate-x-1/2 hidden custom-sm-ex:flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 w-3 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            onClick={() => navigateTo(index)}
                        />
                    ))}
                </div>

                <div className="absolute inset-y-0 flex items-center justify-between w-full">
                    <button
                        onClick={() =>
                            setCurrentImageIndex(
                                (currentImageIndex - 1 + images.length) % images.length
                            )
                        }
                        className="w-10 h-10 absolute text-white bg-white bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none left-2 custom-sm:left-4 custom-sm-ex:-left-4 md:-left-8"
                    >
                        <i className="las la-angle-left"></i>
                    </button>
                    <button
                        onClick={() =>
                            setCurrentImageIndex((currentImageIndex + 1) % images.length)
                        }
                        className="w-10 h-10 absolute text-white bg-white bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none right-2 custom-sm:right-4 custom-sm-ex:-right-4 md:-right-8"
                    >
                        <i className="las la-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCredentialsCarousel;
