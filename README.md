Overview

CommentSense is an AI-powered sentiment analysis tool that helps content creators understand audience feedback by analyzing YouTube and Instagram comments. This landing page features an elegant, interactive hero section with premium animations and a sophisticated color scheme.

Key Features

Hero Component

Dynamic Background: Animated gradient with particle overlay effect
Interactive Elements:
URL input with real-time validation
Micro-interactions on buttons
Typing text animation
Premium Design:
Glass morphism effect
Professional color palette
Responsive layout
Technologies Used

React: Component-based architecture
Framer Motion: For smooth animations
CSS3: Modern styling with variables and animations
Vite: Fast development build tool (if used)
Installation

Clone the repository:
bash
git clone https://github.com/yourusername/commentsense-landing.git
Install dependencies:
bash
npm install
Start the development server:
bash
npm run dev
Customization

Color Scheme

Edit the CSS variables in Hero.css to match your brand:

css
:root {
  --color-primary: #0ea5e9;
  --color-primary-dark: #0369a1;
  --color-secondary: #8b5cf6;
  /* ... other variables */
}
Animations

Adjust animation parameters in both JS and CSS files:

javascript
// In Hero.js
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
css
/* In Hero.css */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
File Structure

src/
├── components/
│   ├── Hero.js       # Main hero component
│   └── Hero.css      # Hero component styles
├── App.js            # Main application entry
└── main.js           # React DOM render
Best Practices

Performance:
Lazy load heavy components
Optimize animation performance with will-change
Use CSS transforms instead of properties that trigger layout recalculations
Accessibility:
Proper contrast ratios
ARIA labels for interactive elements
Keyboard navigable components
Browser Support:
Works on modern browsers (Chrome, Firefox, Safari, Edge)
Graceful degradation for older browsers
License

This project is licensed under the MIT License - see the LICENSE.md file for details.

Credits

Design inspiration from modern SaaS platforms
Animation techniques from Framer Motion documentation
Color palette from Tailwind CSS
