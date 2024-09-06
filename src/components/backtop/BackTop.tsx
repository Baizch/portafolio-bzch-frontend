import React, { useState, useEffect } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';

import { DarkModeProps } from '../../common/interfaces';

import '../../styles/animations.css';

const BackToTopButton = ({
  isDarkMode,
}: DarkModeProps): React.ReactElement | null => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.scrollY > 300) {
      setShowButton(true);
      setFadeOut(false);
    } else {
      setFadeOut(true);
      setTimeout(() => setShowButton(false), 500);
    }
  };

  const scrollToTop = (): void => {
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
        className={`fixed bottom-4 right-4 ${
          isDarkMode ? 'bg-sky-800' : 'bg-blue-500'
        } text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50 ${
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
