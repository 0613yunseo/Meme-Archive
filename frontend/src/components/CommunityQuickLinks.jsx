import React from 'react';

const CommunityQuickLinks = () => {
  const links = [
    { icon: "🏆", label: "Past Winners", href: "/winners" },
    { icon: "📈", label: "Trending Memes", href: "/trending" },
    { icon: "🕐", label: "Voting History", href: "/history" },
    { icon: "⭐", label: "Hall of Fame", href: "/hall-of-fame" }
  ];

  return (
    <div className="community-quick-links">
      <h3 className="quick-links-title">Quick Links</h3>
      <ul className="quick-links-list">
        {links.map((link, index) => (
          <li key={index} className="quick-link-item">
            <a href={link.href} className="quick-link">
              <span className="link-icon">{link.icon}</span>
              <span className="link-label">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityQuickLinks;

