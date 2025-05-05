import React, { useState } from 'react';
import './Pricing.css';

function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 9,
      annualPrice: 7,
      description: "Perfect for individual creators",
      features: [
        "5 analyses per month",
        "Basic sentiment analysis",
        "Comment summary",
        "Email support"
      ],
      featured: false
    },
    {
      name: "Professional",
      monthlyPrice: 29,
      annualPrice: 24,
      description: "For growing content teams",
      features: [
        "20 analyses per month",
        "Advanced sentiment breakdown",
        "Trend detection",
        "Priority support",
        "CSV exports"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      annualPrice: 79,
      description: "For agencies and large creators",
      features: [
        "Unlimited analyses",
        "All Professional features",
        "API access",
        "White-label reports",
        "Dedicated account manager"
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-header">
        <h2>Simple, Transparent Pricing</h2>
        <p>Choose the plan that fits your needs</p>
        
        <div className="pricing-toggle">
          <span className={!annualBilling ? 'pricing-active' : ''}>Monthly</span>
          <label className="pricing-switch">
            <input 
              type="checkbox" 
              checked={annualBilling}
              onChange={() => setAnnualBilling(!annualBilling)}
            />
            <span className="pricing-slider"></span>
          </label>
          <span className={annualBilling ? 'pricing-active' : ''}>Annual (20% off)</span>
        </div>
      </div>

      <div className="pricing-cards-container">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}
          >
            {plan.featured && <div className="pricing-badge">Most Popular</div>}
            <h3>{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>
            
            <div className="pricing-amount">
              <span className="pricing-value">
                ${annualBilling ? plan.annualPrice : plan.monthlyPrice}
              </span>
              <span className="pricing-period">/month</span>
              {annualBilling && <span className="pricing-annual">billed annually</span>}
            </div>
            
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            
            <button className={`pricing-button ${plan.featured ? 'pricing-button-featured' : ''}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;