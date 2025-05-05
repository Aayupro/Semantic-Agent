import { useState, useEffect } from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

function Hero() {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [typedText, setTypedText] = useState('');
  const titles = ["YouTube Comments", "Instagram Feedback", "Audience Insights"];

  // Typing effect
  useEffect(() => {
    let i = 0;
    let timeout;
    
    const typing = setInterval(() => {
      setTypedText(prev => {
        if (prev.length === titles[i].length) {
          clearInterval(typing);
          timeout = setTimeout(() => {
            i = (i + 1) % titles.length;
            setTypedText('');
          }, 2000);
          return prev;
        }
        return titles[i].substring(0, prev.length + 1);
      });
    }, 100);

    return () => {
      clearInterval(typing);
      clearTimeout(timeout);
    };
  }, [typedText]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    if (!isValid) setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValidUrl = (
      url.includes('youtube.com/watch') || 
      url.includes('youtu.be/') ||
      url.includes('instagram.com/p/') ||
      url.includes('instagram.com/reel/')
    );
    
    if (!isValidUrl) {
      setIsValid(false);
      return;
    }

    setIsLoading(true);
    console.log('Analyzing:', url);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="home" className="hero">
      {/* Background Layers */}
      <div className="background-wrapper">
        <div className="animated-gradient"></div>
        <div className="particle-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content glass-card">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary"
        >
          Understand Your Audience Like Never Before
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-secondary"
        >
          AI-powered analysis for <span className="typed-text">{typedText}</span>
          <span className="cursor">|</span>
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="url-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="input-container">
            <input
              type="text"
              placeholder="Paste YouTube/Instagram URL here..."
              value={url}
              onChange={handleChange}
              className={!isValid ? 'invalid' : ''}
              aria-label="YouTube or Instagram URL"
            />
            <motion.button
              type="submit"
              disabled={isLoading}
              className={`submit-btn ${isLoading ? 'loading' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Analyzing...
                </>
              ) : (
                'Analyze Now'
              )}
            </motion.button>
          </div>
          {!isValid && (
            <motion.p 
              className="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Please enter a valid YouTube or Instagram URL
              <br />
              <small></small>
            </motion.p>
          )}
        </motion.form>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="cta-text">Not convinced? Try our demo</p>
          <div className="demo-buttons">
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;