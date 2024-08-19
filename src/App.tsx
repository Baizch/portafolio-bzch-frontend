import React from 'react';
import 'antd/dist/reset.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import About from './sections/about/About';
import Technologies from './sections/technologies/Technologies';
import Projects from './sections/projects/Projects';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Technologies />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
