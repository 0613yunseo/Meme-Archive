import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/" className="footer-link">Meme Home</Link>
          <Link to="/about" className="footer-link">About us</Link>
          <Link to="/community" className="footer-link">Community</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        </div>
        <div className="footer-copyright">
          © 2023 Meme It. Inc. | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

