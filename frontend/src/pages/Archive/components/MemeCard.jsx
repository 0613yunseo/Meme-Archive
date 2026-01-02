import React from "react";
import styles from "./MemeCard.module.css";

const MemeCard = ({ 
  thumbnail, 
  title, 
  keywords = [], 
  likes = 0, 
  comments = 0 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnailWrap}>
        <img src={thumbnail} alt="meme" className={styles.thumbnail} />
      </div>

      <div className={styles.infoArea}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.keywordWrap}>
          {keywords.map((k, idx) => (
            <span key={idx} className={styles.keyword}>
              {k}
            </span>
          ))}
        </div>

        <div className={styles.bottomStats}>
          <div className={styles.statItem}>
            <span className={styles.icon}>♡</span>
            <span>{likes.toLocaleString()}</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.statItem}>
            <span className={styles.icon}>💬</span>
            <span>{comments.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeCard;
