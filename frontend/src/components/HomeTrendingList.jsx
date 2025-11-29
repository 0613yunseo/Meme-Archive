import React from 'react';
import MemeCard from './MemeCard';

const HomeTrendingList = () => {
  const trendingMemes = [
    { id: 9, title: "Doge", image: "/placeholder-trending-1.jpg" },
    { id: 10, title: "That's what she said", image: "/placeholder-trending-2.jpg" },
    { id: 11, title: "Frog Meme", image: "/placeholder-trending-3.jpg" },
    { id: 12, title: "Hamster Phone", image: "/placeholder-trending-4.jpg" }
  ];

  return (
    <section className="home-trending-list">
      <div className="section-header">
        <h2 className="section-title">Weekly Top Memes</h2>
        <a href="/community" className="section-link">View all</a>
      </div>
      <div className="trending-grid">
        {trendingMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </section>
  );
};

export default HomeTrendingList;

