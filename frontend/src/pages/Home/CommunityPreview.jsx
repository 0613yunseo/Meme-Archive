import { useNavigate } from "react-router-dom";
import styles from "./CommunityPreview.module.css";

export default function CommunityPreview() {
  const navigate = useNavigate();

  const goCommunity = () => navigate("/community");

  return (
    <section className={styles.wrapper}>
      {/* Header */}
      <div
        className={styles.header}
        onClick={goCommunity}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && goCommunity()}
      >
        <h2>Community</h2>
        <span className={styles.arrow}>→</span>
      </div>

      {/* Featured Meme */}
      <div className={styles.featured}>
        <div className={styles.featuredText}>
          <h3>Featured Meme of the Week</h3>
          <p>"When Monday hits different" – by @user123</p>
          <div className={styles.trophy}>🏆</div>
        </div>

        <img
          src="/src/assets/community-feature.jpg"
          alt="Featured meme"
          className={styles.featuredImage}
        />
      </div>

      {/* Meme Poll */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>📊 Today’s Meme Poll</h3>

        <div className={styles.pollGrid}>
          {[
            { img: "/src/assets/poll1.jpg", percent: 42, votes: "1,245" },
            { img: "/src/assets/poll2.jpg", percent: 35, votes: "1,037" },
            { img: "/src/assets/poll3.jpg", percent: 20, votes: "593" },
          ].map((item, i) => (
            <div key={i} className={styles.pollCard}>
              <div className={styles.pollImageWrap}>
                <img src={item.img} alt="poll meme" />
              </div>

              <button className={styles.voteBtn}>Vote</button>

              <div className={styles.pollMeta}>
                <strong>{item.percent}%</strong>
                <span>({item.votes} votes)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Top Memes */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3>👑 Weekly Top Memes</h3>
          <span
            className={styles.viewAll}
            onClick={goCommunity}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && goCommunity()}
          >
            View all →
          </span>
        </div>

        <div className={styles.memeRow}>
          {[
            {
              img: "week1.jpg",
              title: "Suspicious Shiba",
              likes: "10.5k",
              comments: 250,
            },
            {
              img: "week2.jpg",
              title: "That's what she said",
              likes: "9.6k",
              comments: 158,
            },
            {
              img: "week3.jpg",
              title: "Make no peace with evil",
              likes: "8.8k",
              comments: 102,
            },
            {
              img: "week4.jpg",
              title: "Off-work Hamster",
              likes: "7.9k",
              comments: 98,
            },
          ].map((m, i) => (
            <div key={i} className={styles.memeCard}>
              <img src={`/src/assets/${m.img}`} alt={m.title} />
              <div className={styles.memeInfo}>
                <p className={styles.memeTitle}>{m.title}</p>
                <div className={styles.memeStats}>
                  <span>❤️ {m.likes}</span>
                  <span>💬 {m.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Recommended */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3>👥 User Recommended Memes</h3>
          <span
            className={styles.viewAll}
            onClick={goCommunity}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && goCommunity()}
          >
            View all →
          </span>
        </div>

        <div className={styles.memeRow}>
          {[
            { img: "user1.jpg", user: "@Aiden", likes: "7.8k" },
            { img: "user2.jpg", user: "@Mason", likes: "8.1k" },
            { img: "user3.jpg", user: "@Logan", likes: "4.6k" },
            { img: "user4.jpg", user: "@Caleb", likes: "5.6k" },
          ].map((m, i) => (
            <div key={i} className={styles.memeCard}>
              <img src={`/src/assets/${m.img}`} alt={m.user} />
              <div className={styles.memeInfo}>
                <p>{m.user}</p>
                <span>❤️ {m.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
