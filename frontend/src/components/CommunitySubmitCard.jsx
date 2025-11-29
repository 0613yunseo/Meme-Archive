import React from 'react';
import Button from './Button';

const CommunitySubmitCard = () => {
  return (
    <div className="community-submit-card">
      <div className="submit-icon">📤</div>
      <h3 className="submit-title">Submit Your Meme</h3>
      <p className="submit-description">
        Share your creativity with the community and compete for the top spot!
      </p>
      <Button variant="primary">Upload Meme</Button>
    </div>
  );
};

export default CommunitySubmitCard;

