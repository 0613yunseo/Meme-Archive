import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ArchivePage from '../pages/ArchivePage';
import ArchiveDetailPage from '../pages/ArchiveDetailPage';
import CommunityPage from '../pages/CommunityPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/archive/:id" element={<ArchiveDetailPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

