import React from 'react';
import { Link } from 'react-router-dom';
import MemeCard from './MemeCard';

const HomeMemeArchivePreview = () => {
  const archiveMemes = [
    { id: 5, title: "Coffee Bean Proposal", image: "/placeholder-archive-1.jpg" },
    { id: 6, title: "Meme Faces Collage", image: "/placeholder-archive-2.jpg" },
    { id: 7, title: "YOU GOAT THIS!", image: "/placeholder-archive-3.jpg" },
    { id: 8, title: "NO MEN VS GORILLA", image: "/placeholder-archive-4.jpg" }
  ];

  return (
    <section className="home-archive-preview">
      <div className="section-header">
        <h2 className="section-title">Meme Archive</h2>
        <Link to="/archive" className="section-link">
          View all <span className="arrow-icon">→</span>
        </Link>
      </div>
      <div className="archive-preview-grid">
        {archiveMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </section>
  );
};

export default HomeMemeArchivePreview;

