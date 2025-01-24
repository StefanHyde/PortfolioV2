'use client';

import { useEffect, useState } from 'react';
import { HiArrowSmUp } from 'react-icons/hi';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Display or hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-primary-500 dark:bg-primary-800 fixed right-4 bottom-12 z-50 rounded-full p-2 shadow-md duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-hidden"
        >
          <HiArrowSmUp className="text-almost-white text-3xl" />
        </button>
      )}
    </div>
  );
}
