import React from 'react';

const MemeTag = ({ tag, onClick, isActive = false }) => {
  return (
    <button
      className={`meme-tag ${isActive ? 'active' : ''}`}
      onClick={() => onClick && onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default MemeTag;

