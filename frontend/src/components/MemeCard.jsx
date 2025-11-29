import React from 'react';
import { Link } from 'react-router-dom';

const MemeCard = ({ meme, showAuthor = false, showStats = false, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(meme);
    }
  };

  const cardContent = (
    <div className="meme-card" onClick={handleClick}>
      <div className="meme-image-container">
        <img 
          src={meme?.image || '/placeholder-meme.jpg'} 
          alt={meme?.title || 'Meme'} 
          className="meme-image"
        />
      </div>
      {meme?.title && (
        <div className="meme-card-content">
          <h3 className="meme-title">{meme.title}</h3>
          {showAuthor && meme?.author && (
            <p className="meme-author">@{meme.author}</p>
          )}
          {showStats && (
            <div className="meme-stats">
              {meme?.likes && <span className="stat">❤️ {meme.likes}</span>}
              {meme?.comments && <span className="stat">💬 {meme.comments}</span>}
              {meme?.shares && <span className="stat">📤 {meme.shares}</span>}
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (meme?.id && !onClick) {
    return (
      <Link to={`/archive/${meme.id}`} className="meme-card-link">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default MemeCard;

