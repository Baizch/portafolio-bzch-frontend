import React from 'react';
import './App.css';
import 'antd/dist/reset.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import About from './sections/about/About';
import Technologies from './sections/technologies/Technologies';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
