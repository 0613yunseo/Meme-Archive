import styles from "./SuggestSection.module.css";

export default function SuggestSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.textBox}>
          <h3>Suggest a New Meme!</h3>
          <p>Can't find the meme you want? Request a new one now.</p>
        </div>
        <div className={styles.arrow}>↗</div>
      </div>

      <div className={styles.card}>
        <div className={styles.textBox}>
          <h3>Vote for the Hottest Meme!</h3>
          <p>Your choice can change the meme rankings.</p>
        </div>
        <div className={styles.arrow}>↗</div>
      </div>
    </section>
  );
}
