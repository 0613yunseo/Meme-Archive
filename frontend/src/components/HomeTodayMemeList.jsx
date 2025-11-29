import React from 'react';
import MemeCard from './MemeCard';

const HomeTodayMemeList = () => {
  const todayMeme = {
    id: 1,
    title: "What the dog doin?",
    image: "/placeholder-today-meme.jpg",
    author: "user123"
  };

  const popularList = [
    { id: 1, title: "Animals" },
    { id: 2, title: "Global" },
    { id: 3, title: "Funny" }
  ];

  const popularMemes = [
    { id: 2, title: "Never Gonna Give You Up", image: "/placeholder-meme-1.jpg" },
    { id: 3, title: "Bear Meme", image: "/placeholder-meme-2.jpg" },
    { id: 4, title: "Woman Yelling at Cat", image: "/placeholder-meme-3.jpg" }
  ];

  return (
    <section className="home-today-meme">
      <div className="today-meme-section">
        <div className="section-header">
          <h2 className="section-title">Today meme</h2>
          <p className="section-subtitle">Introduce today's meme.</p>
        </div>
        <MemeCard meme={todayMeme} showAuthor />
      </div>
      <div className="popular-list-section">
        <div className="section-header">
          <h2 className="section-title">meme popular list</h2>
        </div>
        <ul className="popular-list">
          {popularList.map((item, index) => (
            <li key={item.id} className="popular-item">
              #{index + 1} {item.title}
            </li>
          ))}
        </ul>
        <div className="popular-memes-grid">
          {popularMemes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTodayMemeList;

