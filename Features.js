import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Sentiment Analysis',
      description: 'Automatically classify comments as positive, negative, or neutral'
    },
    {
      icon: '📝',
      title: 'Feedback Summary',
      description: 'Get the key takeaways from hundreds of comments'
    },
    {
      icon: '⚡',
      title: 'Fast Processing',
      description: 'Analyze thousands of comments in seconds'
    }
  ];

  return (
    <section className="features">
      <h2>Powerful Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;