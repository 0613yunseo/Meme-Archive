import styles from "./MemeArchivePreview.module.css";

const memes = [
  "src/assets/meme1.jpg",
  "src/assets/meme2.jpg",
  "src/assets/meme3.jpg",
  "src/assets/meme4.jpg",
  "src/assets/meme1.jpg",
  "src/assets/meme2.jpg",
];

export default function MemeArchivePreview() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Meme Archive →</h2>

      {/* 🔥 스크롤 전용 컨테이너 */}
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollRow}>
          {memes.map((src, idx) => (
            <div key={idx} className={styles.card}>
              <img src={src} alt="meme" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
