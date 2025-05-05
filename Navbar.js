import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll effect for navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Active section detection
      const sections = ['home', 'features', 'how-it-works', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL using window.history explicitly
      if (window.history.pushState) {
        window.history.pushState(null, null, `#${sectionId}`);
      } else {
        window.location.hash = `#${sectionId}`;
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {isScrolled ? (
        <>
          <button 
            className="circle-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-icon">☰</span>
          </button>
          {menuOpen && (
            <div className="dropdown-menu">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className={activeSection === 'home' ? 'active' : ''}
              >
                Home
              </a>
              <a 
                href="#features" 
                onClick={(e) => scrollToSection(e, 'features')}
                className={activeSection === 'features' ? 'active' : ''}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => scrollToSection(e, 'how-it-works')}
                className={activeSection === 'how-it-works' ? 'active' : ''}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => scrollToSection(e, 'pricing')}
                className={activeSection === 'pricing' ? 'active' : ''}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="logo">CommentSense</div>
          <div className="nav-links">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className={activeSection === 'features' ? 'active' : ''}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className={activeSection === 'how-it-works' ? 'active' : ''}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, 'pricing')}
              className={activeSection === 'pricing' ? 'active' : ''}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </div>
          <button className="cta-button">Get Started</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;