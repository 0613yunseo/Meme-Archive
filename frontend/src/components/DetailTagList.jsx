import React from 'react';
import MemeTag from './MemeTag';

const DetailTagList = ({ tags, onTagClick }) => {
  const defaultTags = ['Funny', 'Fandom', 'Celebrity'];
  const currentTags = tags || defaultTags;

  return (
    <div className="detail-tag-list">
      <div className="detail-header">
        <h1 className="detail-title">GOAT</h1>
        <button className="like-button">❤️</button>
      </div>
      <div className="detail-tags">
        {currentTags.map((tag, index) => (
          <MemeTag 
            key={index} 
            tag={tag} 
            onClick={onTagClick}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailTagList;

