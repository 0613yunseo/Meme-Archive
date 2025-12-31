import styles from "./TodayMeme.module.css";

export default function TodayMeme() {
  return (
    <section className={styles.wrapper}>
      {/* LEFT */}
      <div className={styles.sideCard}>
        <img
          src="src/assets/meme-cat-walk.jpg"
          alt="left meme"
          className={styles.sideImage}
        />
        <div className={styles.cardFooter}>
          <span className={styles.cardTitle}>꽁꽁 고양이</span>
          <span className={styles.tag}>Animals</span>
        </div>
      </div>

      {/* CENTER */}
      <div className={styles.center}>
        <h2 className={styles.title}>Today meme</h2>
        <p className={styles.subTitle}>Introduce today’s meme</p>

        <div className={styles.centerContent}>
          {/* main meme */}
          <div className={styles.mainCard}>
            <img
              src="src/assets/meme-sadcat.jpg"
              alt="sad cat"
              className={styles.mainImage}
            />
            <div className={styles.cardFooter}>
              <span className={styles.cardTitle}>sad cat</span>
              <span className={styles.tag}>Animals</span>
            </div>
          </div>

          {/* ranking */}
          <div className={styles.rank}>
            <p className={styles.rankTitle}>meme popular list</p>
            <ul>
              <li>#1 Animals</li>
              <li>#2 Global</li>
              <li>#3 Funny</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.sideCard}>
        <img
          src="src/assets/meme-rickroll.jpg"
          alt="rick roll"
          className={styles.sideImage}
        />
        <div className={styles.cardFooter}>
          <span className={styles.cardTitle}>Rick Roll</span>
          <span className={styles.tag}>Funny</span>
        </div>
      </div>
    </section>
  );
}
