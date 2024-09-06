import React, { useState, useEffect } from 'react';
import { ConfigProvider, theme } from 'antd';

import './App.css';
import 'antd/dist/reset.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BackToTopButton from './components/backtop/BackTop';

import About from './sections/about/About';
import Technologies from './sections/technologies/Technologies';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleClick = (): void => {
    setIsDarkMode((previousValue: boolean) => !previousValue);
  };

  return (
    <ConfigProvider
      theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}
    >
      <div>
        <BackToTopButton isDarkMode={isDarkMode} />
        <Header isDarkMode={isDarkMode} handleClick={handleClick} />
        <About isDarkMode={isDarkMode} />
        <Technologies isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </ConfigProvider>
  );
}

export default App;
