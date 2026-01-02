import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* 검색바 */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search meme..."
          className={styles.input}
        />
        <span className={styles.searchIcon}></span>
      </div>
    </section>
  );
}
