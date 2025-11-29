import React from 'react';
import MemeCard from './MemeCard';

const DetailRelatedMemes = () => {
  const relatedMemes = [
    { id: 39, title: "LeBron GOAT", image: "/placeholder-related-1.jpg" },
    { id: 40, title: "WATCHA GOAT", image: "/placeholder-related-2.jpg" },
    { id: 41, title: "G.O.A.T for Geeks", image: "/placeholder-related-3.jpg" },
    { id: 42, title: "Pizza GOAT", image: "/placeholder-related-4.jpg" }
  ];

  return (
    <section className="detail-related-memes">
      <h2 className="section-title">이 밈은 이렇게 쓰였어요. (This meme was used like this.)</h2>
      <div className="related-memes-grid">
        {relatedMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </section>
  );
};

export default DetailRelatedMemes;

