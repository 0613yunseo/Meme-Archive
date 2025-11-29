import React from 'react';

const ArchiveKeywordRanking = () => {
  const keywords = [
    { name: "Fandom", rank: 2, percentage: 60 },
    { name: "Funny", rank: 1, percentage: 100 },
    { name: "English", rank: 3, percentage: 40 }
  ];

  return (
    <div className="archive-keyword-ranking">
      <div className="keyword-bars">
        {keywords.map((keyword) => (
          <div key={keyword.name} className="keyword-bar-item">
            <div 
              className="keyword-bar" 
              style={{ height: `${keyword.percentage}%` }}
            >
              <span className="keyword-name">{keyword.name}</span>
              <span className="keyword-rank">#{keyword.rank}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveKeywordRanking;

