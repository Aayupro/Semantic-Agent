import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    { number: '1', text: 'Paste your YouTube or Instagram URL' },
    { number: '2', text: 'Our AI scans and analyzes all comments' },
    { number: '3', text: 'View your detailed sentiment report' },
    { number: '4', text: 'Get actionable insights to improve your content' }
  ];

  return (
    <section id="how-it-works">
            {/* Your how it works content */}
          
          
        
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-number">{step.number}</div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}

export default HowItWorks;