import React from 'react';
import { Link } from 'react-router-dom';

const DetailBreadcrumb = () => {
  return (
    <nav className="detail-breadcrumb">
      <Link to="/archive" className="breadcrumb-link">Meme Archive</Link>
      <span className="breadcrumb-separator">/</span>
      <span className="breadcrumb-current">상세 (Detail)</span>
    </nav>
  );
};

export default DetailBreadcrumb;

