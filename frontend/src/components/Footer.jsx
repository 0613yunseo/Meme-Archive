import styles from "./Footer.module.css";

// icons
import ArrowRight from "../assets/arrow-right.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRightCircle from "../assets/arrow-right-circle.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>

      {/* 상단 카드 */}
      <div className={styles.topSection}>
        <div className={styles.heardBlock}>
          <div className={styles.heardText}>
            HEARD<br />ENOUGH?
          </div>
          <img
            src={ArrowLeft}
            className={styles.smallArrow}
            alt="arrow left"
          />
        </div>

        <div className={styles.contactTitle}>Contact us</div>

        <div className={styles.circleWrap}>
          <img
            src={ArrowRightCircle}
            className={styles.circleBg}
            alt="circle background"
          />
          <img
            src={ArrowRight}
            className={styles.circleArrow}
            alt="arrow right"
          />
        </div>
      </div>

      {/* 하단 보라 카드 */}
      <div className={styles.bottomSection}>
        <p className={styles.subText}>
          Let’s get this meme party started.
        </p>
        <p className={styles.email}>Meme@ourmemehub.com</p>

        <div className={styles.menuGrid}>
          <div>Meme Archive</div>
          <div>Upload Your Meme</div>
          <div></div>

          <div>Meme Creation</div>
          <div>Creator Ranking</div>
          <div>FAQ</div>

          <div>Community</div>
          <div>Meme Templates</div>
          <div>Contact / Feedback</div>
        </div>

        <div className={styles.copy}>
          © 2025 MemeHub Inc. | Privacy | Terms | Meme Usage Policy
        </div>
      </div>

    </div>
  );
};

export default Footer;