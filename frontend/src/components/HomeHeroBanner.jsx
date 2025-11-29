import React from 'react';
import SearchBar from './SearchBar';

const HomeHeroBanner = () => {
  return (
    <section className="home-hero-banner">
      <h1 className="hero-title">Meme It.</h1>
      <p className="hero-subtitle">밈을 공유하고 즐기세요</p>
      <div className="hero-search">
        <SearchBar placeholder="Search memes..." />
      </div>
    </section>
  );
};

export default HomeHeroBanner;

