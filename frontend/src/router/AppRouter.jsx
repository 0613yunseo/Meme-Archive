<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router-dom";
import Community from "../pages/Community/Community.jsx";
import Detail from "../pages/Detail/Detail.jsx";

// ✅ HomePage는 당장 안 쓸 거라면 주석
// import HomePage from "../pages/Home/HomePage.jsx";

export default function AppRouter() {
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*
import HomePage from '../pages/Home/HomePage';
import ArchivePage from '../pages/Archive/ArchivePage';
import ArchiveDetailPage from '../pages/ArchiveDetail/ArchiveDetailPage';
import CommunityPage from '../pages/Community/CommunityPage';
*/
const AppRouter = () => {
>>>>>>> dev
  return (
    <Routes>
      {/* ✅ 기본 진입은 커뮤니티로 */}
      <Route path="/" element={<Navigate to="/community" replace />} />

      <Route path="/community" element={<Community />} />
      <Route path="/detail" element={<Detail />} />

      {/* ✅ Home 라우트도 주석 */}
      {/* <Route path="/home" element={<HomePage />} /> */}

      {/* ✅ 없는 경로는 커뮤니티로 보내기(선택) */}
      <Route path="*" element={<Navigate to="/community" replace />} />
    </Routes>
  );
}
