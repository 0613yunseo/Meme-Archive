import React, { useState } from 'react';
import MemeTag from './MemeTag';

const ArchiveFilterSidebar = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedKeywords, setSelectedKeywords] = useState(['Funny', 'Korean', 'Global']);
  const [selectedTrends, setSelectedTrends] = useState(['Hot on TikTok', 'Hot on X', 'Hot on Instagram']);

  const years = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'];
  
  const keywords = ['Animals', 'Celebrity', 'Fandom', 'Work Life', 'School Life', 'Dating / Love', 'Food', 'Tech', 'Funny', 'Dark Humor', 'Korean', 'English', 'Japanese', 'Global'];
  
  const trends = ['Hot on TikTok', 'Hot on X', 'Hot on Instagram'];

  const handleKeywordToggle = (keyword) => {
    setSelectedKeywords(prev => 
      prev.includes(keyword) 
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  const handleTrendToggle = (trend) => {
    setSelectedTrends(prev => 
      prev.includes(trend) 
        ? prev.filter(t => t !== trend)
        : [...prev, trend]
    );
  };

  return (
    <aside className="archive-filter-sidebar">
      <h2 className="sidebar-title">Meme Archive</h2>
      
      <div className="filter-section">
        <div className="filter-header">
          <span className="trophy-icon">🏆</span>
          <h3 className="filter-title">Rising Keywords</h3>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">정렬 (Sort)</h3>
        <div className="filter-buttons">
          <button 
            className={`filter-button ${sortBy === 'popular' ? 'active' : ''}`}
            onClick={() => setSortBy('popular')}
          >
            인기순 (Popular)
          </button>
          <button 
            className={`filter-button ${sortBy === 'latest' ? 'active' : ''}`}
            onClick={() => setSortBy('latest')}
          >
            최신순 (Latest)
          </button>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">연도별 (By Year)</h3>
        <div className="year-grid">
          {years.map((year) => (
            <button
              key={year}
              className={`year-button ${selectedYear === year ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">키워드별 (By Keyword)</h3>
        <div className="keyword-grid">
          {keywords.map((keyword) => (
            <MemeTag
              key={keyword}
              tag={keyword}
              isActive={selectedKeywords.includes(keyword)}
              onClick={handleKeywordToggle}
            />
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">트렌드별 (By Trend)</h3>
        <div className="trend-buttons">
          {trends.map((trend) => (
            <button
              key={trend}
              className={`trend-button ${selectedTrends.includes(trend) ? 'active' : ''}`}
              onClick={() => handleTrendToggle(trend)}
            >
              {trend}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ArchiveFilterSidebar;

