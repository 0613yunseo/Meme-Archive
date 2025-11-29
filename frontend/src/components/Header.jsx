import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="nav-link">Meme Archive</Link>
        <span className="nav-separator">/</span>
        <Link to="/creation" className="nav-link">Meme Creation</Link>
        <span className="nav-separator">/</span>
        <Link to="/community" className="nav-link">Community</Link>
        <span className="nav-separator">/</span>
        <Link to="/mypage" className="nav-link">My Page</Link>
        <Link to="/signin" className="nav-link sign-in">
          Sign in <span className="arrow-icon">→</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

