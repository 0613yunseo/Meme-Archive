import React from 'react';
import MemeCard from './MemeCard';
import MemeTag from './MemeTag';

const DetailSimilarList = () => {
  const similarMemes = [
    { id: 43, title: "LEGEND", image: "/placeholder-similar-1.jpg" },
    { id: 44, title: "Slaaaaaaay", image: "/placeholder-similar-2.jpg" },
    { id: 45, title: "Dog Character", image: "/placeholder-similar-3.jpg" }
  ];

  const tags = ['Funny', 'Fandom', 'Celebrity'];

  return (
    <section className="detail-similar-list">
      <h2 className="section-title">See More Similar Memes</h2>
      <div className="similar-tags">
        {tags.map((tag, index) => (
          <MemeTag key={index} tag={tag} />
        ))}
      </div>
      <div className="similar-memes-grid">
        {similarMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </section>
  );
};

export default DetailSimilarList;

