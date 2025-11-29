import React from 'react';

const CommunityStatsCard = () => {
  const stats = [
    { label: "Total Votes Today", value: "4,975" },
    { label: "Active Users", value: "1,234" },
    { label: "Memes This Week", value: "158" }
  ];

  return (
    <div className="community-stats-card">
      <h3 className="stats-title">Community Stats</h3>
      <ul className="stats-list">
        {stats.map((stat, index) => (
          <li key={index} className="stat-item">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityStatsCard;

