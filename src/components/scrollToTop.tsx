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
          className="fixed right-4 bottom-12 z-50 p-2 bg-primary-500 dark:bg-primary-800 rounded-full shadow-md hover:shadow-lg hover:scale-105 focus:outline-none ease-in-out duration-300"
        >
          <HiArrowSmUp className="text-3xl text-almost-white" />
        </button>
      )}
    </div>
  );
}
