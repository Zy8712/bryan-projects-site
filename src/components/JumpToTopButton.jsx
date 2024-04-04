import React, { useState, useEffect } from 'react';

const JumpToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event
  // pageOffsetY depreciated, replaced with scrollY
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <button onClick={scrollToTop}
      className={`fixed z-50 bottom-3 right-3 w-12 h-12 bg-gradient-to-b from-light-gray to-very-dark-blue border-solid rounded-full flex justify-center items-center text-white ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-linear`}>
      <i className="las la-chevron-circle-up text-6xl"></i>
    </button>
  );
};

export default JumpToTopButton;