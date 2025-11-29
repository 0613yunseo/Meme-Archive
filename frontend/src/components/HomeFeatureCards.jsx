import React from 'react';
import Button from './Button';

const HomeFeatureCards = () => {
  const features = [
    {
      icon: "✏️",
      title: "Simple Editing Tools",
      description: "Edit text, emoji, and layout easily with drag & drop."
    },
    {
      icon: "👁️",
      title: "Live Preview",
      description: "See your meme update instantly as you edit."
    },
    {
      icon: "📤",
      title: "Instant Sharing",
      description: "Upload and share your meme to the community with one click."
    }
  ];

  return (
    <section className="home-feature-cards">
      <div className="feature-header">
        <h2 className="feature-main-title">Create Memes & Share Instantly</h2>
        <p className="feature-subtitle">Design your own meme, learn trends, and share with the community in seconds.</p>
        <div className="feature-buttons">
          <Button variant="secondary">Upload Memes</Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
      
      <div className="feature-mockup">
        <div className="mockup-placeholder">
          <p>Meme Creation Tool UI Mockup</p>
        </div>
      </div>

      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFeatureCards;

