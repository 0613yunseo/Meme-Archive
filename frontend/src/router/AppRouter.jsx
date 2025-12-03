import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import ArchivePage from '../pages/Archive/ArchivePage';
import ArchiveDetailPage from '../pages/ArchiveDetail/ArchiveDetailPage';
import CommunityPage from '../pages/Community/CommunityPage';

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

