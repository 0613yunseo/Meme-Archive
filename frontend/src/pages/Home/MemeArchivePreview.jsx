// src/Home/MemeArchivePreview.jsx
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <h2
        className={styles.title}
        onClick={() => navigate("/archive")}
      >
        Meme Archive →
      </h2>

      <div className={styles.scrollWrapper}>
        <div className={styles.scrollRow}>
          {memes.map((src, idx) => (
            <div
              key={idx}
              className={styles.card}
              onClick={() => navigate("/archive")}
            >
              <img src={src} alt="meme" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
