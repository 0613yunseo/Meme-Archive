import styles from "./WhatWeDo.module.css";
import { Handshake } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className={styles.wrapper}>
      {/* 왼쪽 설명 영역 */}
      <div className={styles.left}>
        <h2 className={styles.title}>What we do</h2>

        <button className={styles.exploreBtn}>
          Explore Servicse <span>→</span>
        </button>

        <p className={styles.desc}>
          Design, Develop and Run <br />
          Any Business meme <br />
          You Need
        </p>
      </div>

      {/* 오른쪽 카드 영역 */}
      <div className={styles.cards}>
        {/* About company */}
        <div className={`${styles.card} ${styles.company}`}>
          <div className={styles.iconCircle}>
            <Handshake size={22} />
          </div>

          <img
            src="src/assets/about-company.jpg"
            alt="about company"
            className={styles.image}
          />

          <h3 className={styles.cardTitle}>About_company</h3>
          <div className={styles.line} />

          <p className={styles.cardDesc}>
            저희는 사용자들이 추천한 다양한 밈을 가져와 투표와 꾸미기를
            통해 더 쉽게 접근할 수 있도록 합니다. 또한 사용자들의 다양한
            의견을 수집해 밈 커뮤니티 활동이 더 나은 방향으로 운영되도록 합니다.
          </p>
        </div>

        {/* About community */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>About_community</h3>

          <img
            src="src/assets/about-community.jpg"
            alt="about community"
            className={styles.imageWide}
          />

          <div className={styles.line} />

          <p className={styles.cardDesc}>
            저희 커뮤니티는 누구나 편하게 의견을 나누고 콘텐츠를
            공유할 수 있는 열린 공간을 지향합니다. 사용자는 단순한
            구독자가 아니라, 함께 문화를 만들고 확장하는 크리에이터입니다.
          </p>
        </div>

        {/* About meme */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>About_meme</h3>

          <img
            src="src/assets/about-meme.jpg"
            alt="about meme"
            className={styles.imageWide}
          />

          <div className={styles.line} />

          <p className={styles.cardDesc}>
            저희는 유머와 창의성의 자유를 존중하면서도 모두가 편안하고
            안전한 환경을 유지하는 것을 최우선 가치로 두고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
