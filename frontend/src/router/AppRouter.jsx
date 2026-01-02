// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";                // 홈
import ArchivePage from "../pages/Archive/ArchivePage";
import Community from "../pages/Community/Community";
import Detail from "../pages/Detail/Detail";           // 아카이브 디테일
// 필요하면 Creation, MyPage도 나중에 추가

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Meme Archive 리스트 페이지 */}
      <Route path="/archive" element={<ArchivePage />} />

      {/* Archive 디테일 페이지 (id는 나중에 써도 되고, 안 써도 됨) */}
      <Route path="/archive/detail/:memeId" element={<Detail/>} />

      {/* 커뮤니티 페이지 */}
      <Route path="/community" element={<Community />} />

      {/* TODO: Creation / Mypage 도 만들면 여기에 추가 */}
      {/* <Route path="/creation" element={<Creation />} /> */}
      {/* <Route path="/mypage" element={<MyPage />} /> */}
    </Routes>
  );
}
