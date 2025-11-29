import React from 'react';
import Button from './Button';

const HomeSuggestMeme = () => {
  return (
    <section className="home-suggest-meme">
      <div className="suggest-card">
        <h3 className="suggest-title">Suggest a New Meme!</h3>
        <p className="suggest-subtitle">Can't find the meme you want? Request a new meme now.</p>
        <Button variant="primary" icon="→">
          Suggest
        </Button>
      </div>
      <div className="suggest-card">
        <h3 className="suggest-title">Vote for the Hottest Meme!</h3>
        <p className="suggest-subtitle">Your VOTE can change the meme rankings.</p>
        <Button variant="primary" icon="→">
          Vote
        </Button>
      </div>
    </section>
  );
};

export default HomeSuggestMeme;

