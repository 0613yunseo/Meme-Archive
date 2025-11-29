import React from 'react';
import MemeCard from './MemeCard';
import Button from './Button';

const CommunityWeeklyRankingCard = () => {
  const weeklyMemes = [
    {
      id: 48,
      rank: 1,
      title: "The Evolution of My Code",
      image: "/placeholder-ranking-1.jpg",
      author: "user123",
      date: "May 8, 2025",
      likes: "7.8k",
      comments: "142",
      shares: "2.1k"
    },
    {
      id: 49,
      rank: 2,
      title: "The Evolution of My Code",
      image: "/placeholder-ranking-2.jpg",
      author: "user123",
      date: "May 8, 2025",
      likes: "7.8k",
      comments: "142",
      shares: "2.1k"
    },
    {
      id: 50,
      rank: 3,
      title: "The Evolution of My Code",
      image: "/placeholder-ranking-3.jpg",
      author: "user123",
      date: "May 8, 2025",
      likes: "7.8k",
      comments: "142",
      shares: "2.1k"
    },
    {
      id: 51,
      rank: 4,
      title: "The Evolution of My Code",
      image: "/placeholder-ranking-4.jpg",
      author: "user123",
      date: "May 6, 2025",
      likes: "7.8k",
      comments: "142",
      shares: "2.1k"
    },
    {
      id: 52,
      rank: 5,
      title: "바라보는 고양이 (Staring Cat)",
      image: "/placeholder-ranking-5.jpg",
      author: "user42",
      date: "May 10, 2025",
      likes: "7.8k",
      comments: "142",
      shares: "2.1k"
    }
  ];

  return (
    <section className="community-weekly-ranking">
      <div className="ranking-header">
        <h2 className="ranking-title">Weekly Top Memes</h2>
        <p className="ranking-subtitle">Week of May 5-11, 2025</p>
      </div>
      <div className="ranking-list">
        {weeklyMemes.map((meme) => (
          <div key={meme.id} className="ranking-item">
            <div className="ranking-number">{meme.rank}</div>
            <div className="ranking-meme-thumbnail">
              <MemeCard meme={meme} />
            </div>
            <div className="ranking-info">
              <h3 className="ranking-meme-title">{meme.title}</h3>
              <p className="ranking-meta">
                @{meme.author} • {meme.date}
              </p>
              <div className="ranking-stats">
                <span className="stat">❤️ {meme.likes}</span>
                <span className="stat">💬 {meme.comments}</span>
                <span className="stat">📤 {meme.shares}</span>
              </div>
            </div>
            <Button variant="secondary">View</Button>
          </div>
        ))}
      </div>
      <div className="ranking-footer">
        <Button variant="primary">View All Top Memes</Button>
      </div>
    </section>
  );
};

export default CommunityWeeklyRankingCard;

