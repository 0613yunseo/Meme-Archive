
import styles from "./Footer.module.css";

// 네가 저장한 아이콘 이미지 (이름/경로만 실제에 맞게 수정하면 됨)
import FooterLogo from "../assets/arrow-right.svg";
import FooterSpark from "../assets/arrow-left.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* 상단 영역: 텍스트 + 로고 원 */}
        <div className={styles.topRow}>
          <div className={styles.heardBox}>
            <p>HEARD</p>
            <p>ENOUGH?</p>
          </div>

          <p className={styles.title}>Contact us</p>

          <div className={styles.logoCircle}>
            {/* 흰색 동그라미 배경 */}
            <div className={styles.circleBg} />

            {/* 가운데 로고 이미지 */}
            <img
              src={FooterLogo}
              alt="MemeHub logo"
              className={styles.logoImg}
            />

            {/* 작은 좌측 아이콘 */}
            <img
              src={FooterSpark}
              alt=""
              className={styles.sparkImg}
            />
          </div>
        </div>

        {/* 보라색 패널 */}
        <div className={styles.purplePanel}>
          {/* 이메일 / 문구 */}
          <div className={styles.contactInfo}>
            <p className={styles.subText}>
              Let's get this meme party started.
            </p>
            <p className={styles.email}>Meme@ourmemehub.com</p>
            
          </div>

          {/* 링크 그룹 */}
          <div className={styles.linksRow}>
            <div className={styles.linksCol}>
              <p>Meme Archive</p>
              <p>Meme Creation</p>
              <p>Community</p>
            </div>
            <div className={styles.linksCol}>
              <p>Upload Your Meme</p>
              <p>Creator Ranking</p>
              <p>Meme Templates</p>
            </div>
            <div className={styles.linksCol}>
              <p>&nbsp;</p>

              <p>FAQ</p>
              <p>Contact / Feedback</p>
            </div>
          </div>

          {/* 카피라이트 */}
          <p className={styles.copy}>
            © 2025 MemeHub Inc.  |  Privacy  |  Terms  |  Meme Usage Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
