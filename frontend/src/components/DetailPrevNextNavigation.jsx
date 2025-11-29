import React from 'react';

const DetailPrevNextNavigation = () => {
  return (
    <div className="detail-prev-next-nav">
      <button className="nav-button prev-button">
        <span className="nav-arrow">←</span>
        <span className="nav-text">이전 밈 (Previous Meme)</span>
      </button>
      <button className="nav-button next-button">
        <span className="nav-text">다음 밈 (Next Meme)</span>
        <span className="nav-arrow">→</span>
      </button>
    </div>
  );
};

export default DetailPrevNextNavigation;

