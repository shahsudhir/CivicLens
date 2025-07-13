// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './Components/HeroSection';
import AboutUs from './Components/AboutUs';
import CaseStudy from './Components/CaseStudy';
import Resources from './Components/Resources';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <CaseStudy/>
      <Resources />
     
      
    </>
  );
}

export default App;