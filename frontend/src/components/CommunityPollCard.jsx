import React from 'react';
import MemeCard from './MemeCard';
import ProgressBar from './ProgressBar';
import Button from './Button';

const CommunityPollCard = () => {
  const pollMemes = [
    {
      id: 46,
      title: "바라보는 고양이 (Staring Cat)",
      image: "/placeholder-poll-cat.jpg",
      author: "user42",
      percentage: 53,
      subtitle: "HISTORY OF M"
    },
    {
      id: 47,
      title: "This is fine",
      image: "/placeholder-poll-dog.jpg",
      author: "user41",
      percentage: 80
    }
  ];

  return (
    <section className="community-poll-card">
      <div className="poll-header">
        <h1 className="poll-main-title">Today's Meme Poll</h1>
        <p className="poll-subtitle">Vote for your favorite meme! Results will be revealed at midnight.</p>
      </div>
      <div className="poll-cards">
        {pollMemes.map((meme, index) => (
          <div key={meme.id} className="poll-meme-card">
            <MemeCard meme={meme} showAuthor />
            {meme.subtitle && <p className="meme-subtitle">{meme.subtitle}</p>}
            <ProgressBar percentage={meme.percentage} />
            <Button variant="primary" icon="👍">
              Vote for Meme {String.fromCharCode(65 + index)}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityPollCard;

