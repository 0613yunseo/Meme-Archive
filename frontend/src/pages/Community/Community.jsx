import React, { useMemo, useState } from "react";
import "./Community.css";
import WeeklyRankCard from "./components/WeeklyRankCard/WeeklyRankCard.jsx";

// ✅ 공통 Header/Footer - 주석 처리
// import Header from "../../components/Header.jsx";
// import Footer from "../../components/Footer.jsx";

/**
 * assets
 */
import meme1 from "./assets/memes/meme1.png";
import meme2 from "./assets/memes/meme2.png";
import meme3 from "./assets/memes/meme3.png";

import post1 from "./assets/thumbs/post1.png";
import post2 from "./assets/thumbs/post2.png";
import post3 from "./assets/thumbs/post3.png";
import post4 from "./assets/thumbs/post4.png";
import post5 from "./assets/thumbs/post5.png";

import icoUpload from "./assets/icons/upload.svg";
import icoTrophy from "./assets/icons/trophy.svg";
import icoTrend from "./assets/icons/trend.svg";
import icoClock from "./assets/icons/clock.svg";
import icoCrown from "./assets/icons/crown.svg";

import icoHeart from "./assets/icons/heart.svg";
import icoComment from "./assets/icons/comment.svg";
import icoShare from "./assets/icons/share.svg";

import icoAvatar from "./assets/icons/ellipse-2.svg";

export default function Community() {
  // ✅ Figma 순서: 2(왼쪽) - 1(가운데) - 3(오른쪽)
  const memes = useMemo(
    () => [
      { id: 2, img: meme2, pos: "left" },
      { id: 1, img: meme1, pos: "center" },
      { id: 3, img: meme3, pos: "right" },
    ],
    []
  );

  const [selected, setSelected] = useState(null);

  const weekly = useMemo(
    () => [
      {
        id: 1,
        title: "The Evolution of My Code",
        user: "user123",
        date: "May 8, 2025",
        views: "7.8k", // ❤️
        comments: "142", // 💬
        likes: "2.1k", // 🔗
        thumb: post1,
      },
      { id: 2, title: "The Evolution of My Code", user: "user123", date: "May 8, 2025", views: "7.8k", comments: "142", likes: "2.1k", thumb: post2 },
      { id: 3, title: "The Evolution of My Code", user: "user123", date: "May 8, 2025", views: "7.8k", comments: "142", likes: "2.1k", thumb: post3 },
      { id: 4, title: "The Evolution of My Code", user: "user123", date: "May 8, 2025", views: "7.8k", comments: "142", likes: "2.1k", thumb: post4 },
      { id: 5, title: "바라보는 고양이", user: "user42", date: "May 10, 2025", views: "7.8k", comments: "142", likes: "2.1k", thumb: post5 },
    ],
    []
  );

  return (
    <div className="communityPage">
      {/* ✅ 공통 Header - 주석 처리 */}
      {/* <Header /> */}

      {/* ===== Today + Right ===== */}
      <main className="mainGrid">
        {/* Left */}
        <section className="leftCol">
          <section className="todayPanel">
            <div className="todayHeader">
              <h1 className="todayTitle">Today's Meme</h1>
              <p className="todaySub">
                Collect for your favorite meme! Results will be revealed at midnight.
              </p>
            </div>

            <div className="todayCards">
              {memes.map((m) => (
                <button
                  key={m.id}
                  className={`voteCard ${m.pos} ${selected === m.id ? "selected" : ""}`}
                  onClick={() => setSelected(m.id)}
                  aria-label={`Vote meme ${m.id}`}
                  type="button"
                >
                  <div className="voteNum">{m.id}</div>
                  <div className={`voteFrame ${m.pos}`}>
                    <img className="voteImg" src={m.img} alt={`Meme ${m.id}`} />
                  </div>
                </button>
              ))}
            </div>
          </section>
        </section>

        {/* Right */}
        <aside className="rightCol">
          <div className="uploadCard">
            <div className="uploadIconBox">
              <img className="uploadIcon" src={icoUpload} alt="upload" />
            </div>

            <div className="uploadTitle">Submit Your Meme</div>
            <div className="uploadDesc">
              Share your creativity with the
              <br />
              community and compete for the top
              <br />
              spot!
            </div>

            <button className="uploadBtn" onClick={() => alert("Upload Meme 연결 예정")}>
              Upload Meme
            </button>
          </div>

          <div className="quickCard">
            <div className="quickTitle">Quick Links</div>

            <button className="quickLink" onClick={() => alert("Past Winners")}>
              <img className="quickIco" src={icoTrophy} alt="trophy" />
              Past Winners
            </button>

            <button className="quickLink" onClick={() => alert("Trending Memes")}>
              <img className="quickIco" src={icoTrend} alt="trend" />
              Trending Memes
            </button>

            <button className="quickLink" onClick={() => alert("Voting History")}>
              <img className="quickIco" src={icoClock} alt="clock" />
              Voting History
            </button>

            <button className="quickLink" onClick={() => alert("Hall of Fame")}>
              <img className="quickIco" src={icoCrown} alt="crown" />
              Hall of Fame
            </button>
          </div>
        </aside>
      </main>

      {/* ===== Weekly ===== */}
      <section className="weeklySection">
        <div className="weeklyInner">
          <h2 className="weeklyTitle">Weekly Top Memes</h2>

          <div className="weeklyList">
            {weekly.map((p, idx) => (
              <WeeklyRankCard
                key={p.id}
                rank={idx + 1}
                title={p.title}
                user={p.user}
                date={p.date}
                likes={p.views}        // ❤️ = views
                comments={p.comments}  // 💬 = comments
                shares={p.likes}       // 🔗 = likes
                thumbSrc={p.thumb}
                avatarSrc={icoAvatar}
                icoHeart={icoHeart}
                icoComment={icoComment}
                icoShare={icoShare}
                onView={() => alert(`View post ${p.id}`)}
              />
            ))}
          </div>

          <div className="viewAllWrap">
            <button className="viewAllBtn" onClick={() => alert("View All Top Memes 라우팅 연결")}>
              View All Top Memes
            </button>
          </div>
        </div>
      </section>

      {/* ✅ 공통 Footer - 주석 처리 */}
      {/* <Footer /> */}
    </div>
  );
}
