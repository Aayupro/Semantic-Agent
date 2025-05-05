import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import './AnimatedSection.css'; // We'll create this next

export default function AnimatedSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of element is visible
    triggerOnce: true // Only animate once
  });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      // Use setTimeout to stagger animations if delay is provided
      const timer = setTimeout(() => {
        setAnimated(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [inView, animated, delay]);

  return (
    <div 
      ref={ref}
      className={`animated-section ${animated ? 'animate-in' : ''}`}
    >
      {children}
    </div>
  );
}