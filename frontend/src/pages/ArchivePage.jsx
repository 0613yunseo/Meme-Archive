import React from 'react';
import Header from '../components/Header';
import ArchiveTopNav from '../components/ArchiveTopNav';
import ArchiveKeywordRanking from '../components/ArchiveKeywordRanking';
import ArchiveFilterSidebar from '../components/ArchiveFilterSidebar';
import ArchiveMemeGrid from '../components/ArchiveMemeGrid';

const ArchivePage = () => {
  return (
    <div className="archive-page">
      <Header />
      <div className="archive-content">
        <ArchiveFilterSidebar />
        <div className="archive-main">
          <ArchiveTopNav />
          <ArchiveKeywordRanking />
          <ArchiveMemeGrid />
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;

