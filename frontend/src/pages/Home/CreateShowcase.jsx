import styles from "./CreateShowcase.module.css";
import { Edit3, Eye, Share2 } from "lucide-react";

export default function CreateShowcase() {
  return (
    <section className={styles.wrapper}>
      {/* 상단 텍스트 */}
      <h2 className={styles.title}>
        "Create Memes & Share Instantly"
      </h2>
      <p className={styles.subtitle}>
        Design your own meme, remix trends, and share with the community in seconds.
      </p>

      {/* 버튼 */}
      <div className={styles.actions}>
        <button className={styles.uploadBtn}>Upload Memes</button>
        <button className={styles.startBtn}>Get Started</button>
      </div>

      {/* 미리보기 이미지 */}
      <div className={styles.previewWrap}>
        <img
          src="src/assets/create-preview.jpg"
          alt="Meme Editor Preview"
          className={styles.previewImage}
        />
      </div>

      {/* 카드 영역 */}
      <div className={styles.cardGrid}>
        <FeatureCard
          icon={<Edit3 size={22} />}
          title="Simple Editing Tools"
          desc="Edit text, emoji, and layout easily with drag & drop."
        />
        <FeatureCard
          icon={<Eye size={22} />}
          title="Live Preview"
          desc="See your meme update instantly as you edit."
        />
        <FeatureCard
          icon={<Share2 size={22} />}
          title="Instant Sharing"
          desc="Upload and share your meme to the community with one click."
        />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>{icon}</div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.divider} />
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  );
}
