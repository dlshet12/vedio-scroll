// FeatureReveal.js
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import featureImage1 from '../assets/featureImage1.jpg'; // Add your images
import featureImage2 from '../assets/featureImage2.jpg';
import featureImage3 from '../assets/featureImage3.jpg';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Adaptive Cruise Control",
    description: "Maintains a safe distance from the car in front, automatically adjusting speed.",
    image: featureImage1,
  },
  {
    title: "Advanced Safety Features",
    description: "Automatic emergency braking, lane-keeping assistance, and blind-spot monitoring.",
    image: featureImage2,
  },
  {
    title: "Luxury Interiors",
    description: "Premium leather seats, ambient lighting, and customizable controls.",
    image: featureImage3,
  },
];

const FeatureReveal = () => {
  React.useEffect(() => {
    features.forEach((_, index) => {
      gsap.fromTo(
        `.feature-${index}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: `.feature-${index}`,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="feature-reveal-section">
      {features.map((feature, index) => (
        <div key={index} className={`feature-card feature-${index}`}>
          <img src={feature.image} alt={feature.title} className="feature-image" />
          <div className="feature-info">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureReveal;
