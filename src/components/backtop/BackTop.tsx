import React, { useState, useEffect } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import '../../styles/animations.css';

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
      setFadeOut(false);
    } else {
      setFadeOut(true);
      setTimeout(() => setShowButton(false), 500);
    }
  };

  const scrollToTop = () => {
    const scrollDuration = 1500;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110 z-50 ${
          fadeOut ? 'fade-out' : 'fade-in'
        }`}
        aria-label='Voltar ao topo'
      >
        <ArrowUpOutlined />
      </button>
    )
  );
};

export default BackToTopButton;
