import React from 'react';
import Button from './Button';

const HomeLatestMemes = () => {
  const services = [
    {
      title: "ABOUT - Simplicity",
      image: "/placeholder-service-1.jpg",
      description: "Simple and intuitive meme creation experience."
    },
    {
      title: "ABOUT - Editing",
      image: "/placeholder-service-2.jpg",
      description: "Powerful editing tools for creating perfect memes."
    },
    {
      title: "ABOUT - Sharing",
      image: "/placeholder-service-3.jpg",
      description: "Share your memes instantly with the community."
    }
  ];

  return (
    <section className="home-latest-memes">
      <div className="what-we-do-header">
        <h2 className="section-title">What we do</h2>
        <Button variant="primary">Submit Service</Button>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeLatestMemes;

