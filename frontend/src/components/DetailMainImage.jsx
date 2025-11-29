import React from 'react';

const DetailMainImage = ({ meme }) => {
  const defaultMeme = {
    id: 1,
    title: "GOAT",
    image: "/placeholder-goat-meme.jpg",
    isLiked: false
  };

  const currentMeme = meme || defaultMeme;

  return (
    <div className="detail-main-image">
      <div className="meme-image-wrapper">
        <img 
          src={currentMeme.image} 
          alt={currentMeme.title} 
          className="detail-meme-image"
        />
      </div>
    </div>
  );
};

export default DetailMainImage;

