import HowItWorks from './components/HowItWorks';
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import AnimatedSection from './components/AnimatedSection';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';



function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        {/* Add other sections here */}
      </main>
    </div>
  );
}

export default App;

