import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
  // Start with explicitly false to prevent showing on load
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and update visibility
  useEffect(() => {
    // Simpler scroll check function
    const checkScrollPosition = () => {
      // Show button when scrolled down 300px
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    // Add scroll event listener
    window.addEventListener('scroll', checkScrollPosition);
    
    // Initial check - explicitly set to false to prevent flash on load
    setIsVisible(false);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 gold-gradient text-white p-2 rounded-md shadow-lg z-50 cursor-pointer flex items-center gap-1 text-xs sm:text-sm"
      aria-label="Scroll to top"
    >
      <svg 
        className="w-3 h-3 sm:w-4 sm:h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
      <span>Top</span>
    </motion.button>
  );
};

export default ScrollToTop;
