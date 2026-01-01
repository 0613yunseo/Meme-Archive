import { useMemo, useState } from "react";
import styles from "./ArchivePage.module.css";

import imgRectangle29 from "./assets/Photo/1.jpg";
import imgRectangle30 from "./assets/Photo/2.png";
import imgRectangle31 from "./assets/Photo/3.jpg";
import imgRectangle32 from "./assets/Photo/4.png";
import imgRectangle33 from "./assets/Photo/5.png";
import imgRectangle34 from "./assets/Photo/6.jpg";
import imgRectangle35 from "./assets/Photo/7.png";
import imgRectangle36 from "./assets/Photo/8.jpg";
import imgRectangle37 from "./assets/Photo/9.png";
import imgRectangle38 from "./assets/Photo/10.jpg";
import imgRectangle39 from "./assets/Photo/11.jpg";
import imgRectangle40 from "./assets/Photo/12.png";
import imgRectangle41 from "./assets/Photo/13.png";
import imgRectangle42 from "./assets/Photo/14.jpg";
import imgRectangle43 from "./assets/Photo/15.jpg";
import imgRectangle44 from "./assets/Photo/16.png";
import imgRectangle45 from "./assets/Photo/17.png";
import imgRectangle46 from "./assets/Photo/18.png";
import imgRectangle47 from "./assets/Photo/Funny.png";

const memeImages = [
  imgRectangle29,
  imgRectangle30,
  imgRectangle31,
  imgRectangle32,
  imgRectangle33,
  imgRectangle34,
  imgRectangle35,
  imgRectangle36,
  imgRectangle37,
  imgRectangle38,
  imgRectangle39,
  imgRectangle40,
  imgRectangle41,
  imgRectangle42,
  imgRectangle43,
  imgRectangle44,
  imgRectangle45,
  imgRectangle46,
];

const keywordRows = [
  { left: "Animals", right: "Celebrity", gap: 38 },
  { left: "Fandom", right: "Work Life", gap: 36 },
  { left: "School Life", right: "Dating / Love", gap: 17 },
  { left: "Food", right: "Tech", gap: 57 },
  { left: "Funny", right: "Dark Humor", gap: 50 },
  { left: "Korean", right: "English", gap: 44 },
  { left: "Japanese", right: "Global", gap: 26 },
];
const allKeywords = keywordRows.flatMap((row) => [row.left, row.right]);

const keywordBtnWidth = {
  "Animals": 103,
  "Celebrity": 111,
  "Fandom": 105,
  "Work Life": 113,
  "School Life": 124,
  "Dating / Love": 139,
  "Food": 84,
  "Tech": 83,
  "Funny": 91,
  "Dark Humor": 130,
  "Korean": 97,
  "English": 99,
  "Japanese": 115,
  "Global": 93,
};

const years = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
];


export default function ArchivePage() {
  const [activePage, setActivePage] = useState(1);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedTrends, setSelectedTrends] = useState([]);
  const [sortBy, setSortBy] = useState("popular");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const toggleKeyword = (keyword) => {
    setSelectedKeywords((prev) =>
      prev.includes(keyword) ? prev.filter((k) => k !== keyword) : [...prev, keyword],
    );
  };

  const toggleYear = (year) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year],
    );
  };

  const toggleTrend = (trend) => {
    setSelectedTrends((prev) =>
      prev.includes(trend) ? prev.filter((t) => t !== trend) : [...prev, trend],
    );
  };

  // Rising 카드 3개 (원하면 여기만 바꾸면 됨)
  const rising = useMemo(
    () => [
      { label: "Fandom", img: imgRectangle29, rank: 2, size: "small" },
      { label: "Funny", img: imgRectangle47, rank: 1, size: "big" },
      { label: "English", img: imgRectangle45, rank: 3, size: "small" },
    ],
    [],
  );

  return (
    <div className={styles.screen}>
      <main className={styles.page}>
        {/* Title + Search */}
        <div className={styles.hero}>
          <h1 className={styles.title}>Meme Archive</h1>

          <button type="button" className={styles.searchPill} aria-label="Search">
            <svg viewBox="0 0 24 24" className={styles.searchIcon} aria-hidden="true">
              <path
                d="M10.5 3a7.5 7.5 0 1 0 4.62 13.4l4.24 4.24 1.06-1.06-4.24-4.24A7.5 7.5 0 0 0 10.5 3Zm0 1.5a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Rising Keywords */}
        <section className={styles.risingCard}>
          <div className={styles.risingLeft}>
            <h2 className={styles.risingTitle}>Rising Keywords</h2>
            <div className={styles.trophyCircle} aria-hidden="true">
              <svg viewBox="0 0 60 60" className={styles.trophyIcon} aria-hidden="true">
                <path
                  d="M20 16H40V26C40 34.5 35.5 40 30 40C24.5 40 20 34.5 20 26V16Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M20 20H14V26C14 31 17 34 20 34"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M40 20H46V26C46 31 43 34 40 34"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M30 40V46"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M22 52H38"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M20 48H40"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

          </div>

          <div className={styles.risingRight}>
            {rising.map((item) => (
              <article
                key={item.label}
                className={`${styles.podiumItem} ${item.size === "small" ? styles.podiumItemSmall : ""
                  }`}
              >
                <div className={styles.podiumLabel}>{item.label}</div>

                <div
                  className={`${styles.podiumImg} ${item.size === "big" ? styles.podiumImgBig : styles.podiumImgSmall
                    }`}
                >
                  <img src={item.img} alt={item.label} />
                  <div className={styles.podiumOverlay} />
                  <div className={styles.podiumRank}>{item.rank}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sidebar + Grid */}
        <div className={styles.contentRow}>
          {/* Sidebar */}
          <aside className={isFilterOpen ? styles.sidebarOpen : styles.sidebarClosed}>
            {isFilterOpen ? (
              <div className={styles.sidebarBox}>
                <div className={styles.sidebarHeader}>
                  <div className={styles.sidebarTitle}>Filter</div>
                  <button
                    type="button"
                    className={styles.circleBtn}
                    onClick={() => setIsFilterOpen(false)}
                    aria-label="Collapse filter"
                  >
                    <svg viewBox="0 0 24 24" className={`${styles.arrowSvg} ${styles.arrowLeft}`} aria-hidden="true">
                      {/* head */}
                      <path d="M18 12H6" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
                      {/* shaft */}
                      <path d="M10 8L6 12L11 16" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>

                  </button>

                </div>

                <section className={`${styles.block} ${styles.blockSort}`}>
                  <div className={styles.blockTitle}>정렬</div>
                  <div className={styles.rowBtns}>
                    <button
                      type="button"
                      className={sortBy === "popular" ? styles.pillOn : styles.pillOff}
                      onClick={() => setSortBy("popular")}
                      aria-pressed={sortBy === "popular"}
                    >
                      인기순
                    </button>

                    <button
                      type="button"
                      className={sortBy === "recent" ? styles.pillOn : styles.pillOff}
                      onClick={() => setSortBy("recent")}
                      aria-pressed={sortBy === "recent"}
                    >
                      최신순
                    </button>
                  </div>
                </section>

                <section className={`${styles.block} ${styles.blockYears}`}>
                  <div className={styles.blockTitle}>연도별</div>
                  <div className={styles.grid3}>
                    {years.map((y) => (
                      <button
                        key={y}
                        type="button"
                        className={selectedYears.includes(y) ? styles.pillOn : styles.pillOff}
                        onClick={() => toggleYear(y)}
                        aria-pressed={selectedYears.includes(y)}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </section>

                <section className={`${styles.block} ${styles.blockKeywords}`}>
                  <div className={styles.blockTitle}>키워드별</div>
                  <div className={styles.keywordList}>
                    {keywordRows.map((row) => (
                      <div
                        key={`${row.left}-${row.right}`}          // ✅ 문자열 key라 중복 X
                        className={styles.keywordRow}
                        style={{ columnGap: `${row.gap}px` }}     // ✅ 행마다 gap
                      >
                        <button
                          type="button"
                          className={selectedKeywords.includes(row.left) ? styles.pillOn : styles.pillOff}
                          onClick={() => toggleKeyword(row.left)}
                          aria-pressed={selectedKeywords.includes(row.left)}
                        >
                          {row.left}
                        </button>

                        <button
                          type="button"
                          className={selectedKeywords.includes(row.right) ? styles.pillOn : styles.pillOff}
                          onClick={() => toggleKeyword(row.right)}
                          aria-pressed={selectedKeywords.includes(row.right)}
                        >
                          {row.right}
                        </button>
                      </div>
                    ))}
                  </div>

                </section>

                <section className={`${styles.block} ${styles.blockTrends}`}>
                  <div className={styles.blockTitle}>트렌드별</div>
                  <div className={styles.colBtns}>
                    {["Hot on TikTok", "Hot on X", "Hot on Instagram"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={selectedTrends.includes(t) ? styles.pillOn : styles.pillOff}
                        onClick={() => toggleTrend(t)}
                        aria-pressed={selectedTrends.includes(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <div className={styles.sidebarMini}>
                <div className={styles.sidebarMiniTop}>
                  <button
                    type="button"
                    className={styles.circleBtn}
                    onClick={() => setIsFilterOpen(true)}
                    aria-label="Expand filter"
                  >
                    <svg viewBox="0 0 24 24" className={`${styles.arrowSvg} ${styles.arrowRight}`} aria-hidden="true">
                      {/* ✅ 몸통 있는 화살표 */}
                      <path d="M18 12H6" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
                      <path d="M10 8L6 12L11 16" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </button>
                </div>
              </div>

            )}
          </aside>

          {/* Main */}
          <section className={styles.main}>
            <div className={styles.sectionHead}>
              <div className={styles.sectionTitleWrap}>
                <div className={styles.sectionTitle}>전체 밈 리스트</div>
                <div className={styles.underline} aria-hidden="true" />
              </div>

              {/* ✅ 필터 닫혔을 때만 우측 상단에 Filter 표시 */}
              {!isFilterOpen && (
                <div className={`${styles.sidebarTitle} ${styles.closedFilterLabel}`}>
                  Filter
                </div>
              )}
            </div>

            <div className={isFilterOpen ? styles.memeGrid3 : styles.memeGrid4}>
              {memeImages.map((img, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.cardMedia}>
                    <img src={img} alt={`Meme ${idx + 1}`} className={styles.cardImg} />

                    {/* ✅ hover 시 뜨는 하단 정보 패널 */}
                    <div className={styles.cardInfo}>
                      <div className={styles.cardTitle}>밈 제목</div>

                      <div className={styles.cardChips}>
                        <span className={styles.chip}>키워드</span>
                        <span className={styles.chip}>키워드</span>
                      </div>

                      <div className={styles.cardMeta}>
                        <div className={styles.metaItem}>
                          <svg viewBox="0 0 24 24" className={styles.metaIcon} aria-hidden="true">
                            <path
                              d="M12 21s-7-4.35-9.5-8.5C.7 9.15 2.3 6 6 6c2.1 0 3.4 1.2 4 2
                   .6-.8 1.9-2 4-2 3.7 0 5.3 3.15 3.5 6.5C19 16.65 12 21 12 21Z"
                              fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
                            />
                          </svg>
                          <span>1,453</span>
                        </div>

                        <span className={styles.metaDivider} />

                        <div className={styles.metaItem}>
                          <svg viewBox="0 0 24 24" className={styles.metaIcon} aria-hidden="true">
                            <path
                              d="M20 15a4 4 0 0 1-4 4H9l-5 3V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8Z"
                              fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
                            />
                          </svg>
                          <span>323</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            <div className={styles.pagination}>
              <button type="button" className={styles.pageBtn} aria-label="Prev" onClick={() => setActivePage((p) => Math.max(1, p - 1))}>
                ‹
              </button>

              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`${styles.pageNum} ${activePage === n ? styles.pageNumOn : ""}`}
                  onClick={() => setActivePage(n)}
                  aria-current={activePage === n ? "page" : undefined}
                >
                  {n}
                </button>
              ))}

              <span className={styles.pageDots}>…</span>

              <button type="button" className={styles.pageBtn} aria-label="Next" onClick={() => setActivePage((p) => p + 1)}>
                ›
              </button>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}
