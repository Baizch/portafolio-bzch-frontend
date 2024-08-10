import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import About from './sections/about/About';
import Technologies from './sections/technologies/Technologies';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Technologies />

      <Footer />
    </div>
  );
}

export default App;
