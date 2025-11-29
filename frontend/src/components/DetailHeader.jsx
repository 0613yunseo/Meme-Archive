import React from 'react';
import SearchBar from './SearchBar';

const DetailHeader = () => {
  return (
    <div className="detail-header-section">
      <h1 className="detail-page-title">Meme Archive(상세)</h1>
      <SearchBar placeholder="Search memes..." />
    </div>
  );
};

export default DetailHeader;

