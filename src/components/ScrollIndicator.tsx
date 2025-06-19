import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  useEffect(() => {
    gsap.to('.scroll-indicator', {
      scaleX: scrollProgress / 100,
      duration: 0.1,
      ease: 'none'
    });
  }, [scrollProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800">
      <div
        className="scroll-indicator h-full bg-gradient-to-r from-cyan-400 to-purple-500 origin-left transform scale-x-0"
      />
    </div>
  );
};

export default ScrollIndicator;