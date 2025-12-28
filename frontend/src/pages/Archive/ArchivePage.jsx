import React from "react";
import styles from "./ArchivePage.module.css";
import MemeCard from "../../components/MemeCard/MemeCard";


export default function ArchivePage() {
  const testData = [
    {
      thumbnail: "https://via.placeholder.com/300",
      title: "테스트 밈 제목 1",
      keywords: ["Funny", "Korea"],
      likes: 1234,
      comments: 321,
    },
    {
      thumbnail: "https://via.placeholder.com/300",
      title: "테스트 밈 제목 2",
      keywords: ["Fandom", "Cute"],
      likes: 987,
      comments: 120,
    },
    {
      thumbnail: "https://via.placeholder.com/300",
      title: "테스트 밈 제목 3",
      keywords: ["English"],
      likes: 444,
      comments: 50,
    },
  ];

  return (
    <div className={styles.container}>

      {/* 왼쪽 필터 */}
      <aside className={styles.filterBox}>
        <h3>Filter</h3>

        <div className={styles.filterSection}>
          <h4>정렬</h4>
          <button className={styles.filterBtn}>인기순</button>
          <button className={styles.filterBtn}>최신순</button>
        </div>

        <div className={styles.filterSection}>
          <h4>연도별</h4>
          <div className={styles.yearList}>
            {["2024", "2023", "2022", "2021"].map((y) => (
              <button key={y} className={styles.yearBtn}>{y}</button>
            ))}
          </div>
        </div>

        <div className={styles.filterSection}>
          <h4>키워드별</h4>
          <div className={styles.keywordList}>
            {["Animals", "Celebrity", "Work Life", "School Life", "Tech", "Funny", "Korean", "Global"].map((k) => (
              <button key={k} className={styles.keywordBtn}>{k}</button>
            ))}
          </div>
        </div>
      </aside>

      {/* 오른쪽 메인 콘텐츠 */}
      <main className={styles.mainContent}>

        {/* 페이지 제목 */}
        <h1 className={styles.pageTitle}>Meme Archive</h1>

        {/* 상단 검색바 */}
        <input
          className={styles.searchBar}
          placeholder="Search memes..."
        />

        {/* Rising Keywords 영역 */}
        <section className={styles.risingBox}>
          <h3>Rising Keywords</h3>
          <div className={styles.risingItems}>
            <div className={styles.risingItem}>Fandom</div>
            <div className={styles.risingMain}>Funny</div>
            <div className={styles.risingItem}>English</div>
          </div>
        </section>

        {/* 카드 리스트 */}
        <section className={styles.cardGrid}>
          {testData.map((item, idx) => (
            <MemeCard key={idx} {...item} />
          ))}
        </section>

      </main>
    </div>
  );
}
