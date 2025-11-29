import React from 'react';
import Header from '../components/Header';
import CommunityPollCard from '../components/CommunityPollCard';
import CommunitySubmitCard from '../components/CommunitySubmitCard';
import CommunityQuickLinks from '../components/CommunityQuickLinks';
import CommunityStatsCard from '../components/CommunityStatsCard';
import CommunityWeeklyRankingCard from '../components/CommunityWeeklyRankingCard';
import Footer from '../components/Footer';

const CommunityPage = () => {
  return (
    <div className="community-page">
      <Header />
      <div className="community-content">
        <div className="community-main">
          <CommunityPollCard />
          <CommunityWeeklyRankingCard />
        </div>
        <div className="community-sidebar">
          <CommunitySubmitCard />
          <CommunityQuickLinks />
          <CommunityStatsCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;

