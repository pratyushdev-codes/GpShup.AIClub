import './App.css';
import Navbar from './Component/Navbar';
import React from 'react';
import News from './Component/News';
import Banners from './Component/Banners';
import Otherarticles from './Component/Otherarticles';

function App() {
  return (
    <>
      <Navbar />
      <Banners />
      <News country="in" category="general" />
      <Otherarticles />
    </>
  );
}

export default App;
