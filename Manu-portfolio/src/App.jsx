import React, { useState } from 'react';
import './App.css';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Contact from './assets/components/Contact';



function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About />
      <Contact/>
    </>
  );
}

export default App;
