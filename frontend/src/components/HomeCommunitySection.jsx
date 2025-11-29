import React from 'react';
import { Link } from 'react-router-dom';
import MemeCard from './MemeCard';
import Button from './Button';

const HomeCommunitySection = () => {
  const memeOfTheWeek = {
    id: 13,
    title: "What the dog doin'?",
    image: "/placeholder-meme-week.jpg",
    author: "user123"
  };

  const pollMemes = [
    { id: 14, title: "Dog Character", image: "/placeholder-poll-1.jpg" },
    { id: 15, title: "Cartoon Character", image: "/placeholder-poll-2.jpg" },
    { id: 16, title: "Black Cat", image: "/placeholder-poll-3.jpg" }
  ];

  const userRecommended = [
    { id: 17, title: "Sleeping Pug", image: "/placeholder-user-1.jpg" },
    { id: 18, title: "Futurama", image: "/placeholder-user-2.jpg" },
    { id: 19, title: "Orange Creature", image: "/placeholder-user-3.jpg" },
    { id: 20, title: "White Cat", image: "/placeholder-user-4.jpg" }
  ];

  return (
    <section className="home-community-section">
      <div className="section-header">
        <h2 className="section-title">Community</h2>
        <Link to="/community" className="section-link">
          View all <span className="arrow-icon">→</span>
        </Link>
      </div>
      
      <div className="community-meme-week">
        <div className="meme-week-card">
          <div className="trophy-icon">🏆</div>
          <h3 className="meme-week-title">Fear.not Meme of the Week</h3>
          <p className="meme-week-quote">"{memeOfTheWeek.title}"</p>
          <p className="meme-week-author">by @{memeOfTheWeek.author}</p>
        </div>
        <div className="meme-week-image">
          <img src="/placeholder-community-image.jpg" alt="Community" />
        </div>
      </div>

      <div className="community-poll">
        <h3 className="poll-title">Today's Meme Poll</h3>
        <div className="poll-grid">
          {pollMemes.map((meme) => (
            <div key={meme.id} className="poll-item">
              <MemeCard meme={meme} />
              <Button variant="primary">Vote</Button>
            </div>
          ))}
        </div>
      </div>

      <div className="community-recommended">
        <h3 className="recommended-title">User Recommended Memes</h3>
        <div className="recommended-grid">
          {userRecommended.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
        <a href="/community" className="section-link">View all</a>
      </div>
    </section>
  );
};

export default HomeCommunitySection;

