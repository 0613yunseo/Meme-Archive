import React from 'react';
import Header from '../components/Header';
import HomeHeroBanner from '../components/HomeHeroBanner';
import HomeTodayMemeList from '../components/HomeTodayMemeList';
import HomeMemeArchivePreview from '../components/HomeMemeArchivePreview';
import HomeSuggestMeme from '../components/HomeSuggestMeme';
import HomeTrendingList from '../components/HomeTrendingList';
import HomeCommunitySection from '../components/HomeCommunitySection';
import HomeFeatureCards from '../components/HomeFeatureCards';
import HomeLatestMemes from '../components/HomeLatestMemes';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <HomeHeroBanner />
      <HomeTodayMemeList />
      <HomeMemeArchivePreview />
      <HomeSuggestMeme />
      <HomeTrendingList />
      <HomeCommunitySection />
      <HomeFeatureCards />
      <HomeLatestMemes />
      <Footer />
    </div>
  );
};

export default HomePage;

