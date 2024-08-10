import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <p className='text-red-500 p-8'>teste</p>

      <Footer />
    </div>
  );
}

export default App;
