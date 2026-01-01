import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

import ArrowRightPurple from "../assets/arrow-up-right.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      
      {/* 왼쪽 로고(회색 박스) */}
      <div className={styles.grayBox}></div>

      {/* 메뉴 */}
      <div className={styles.menuGroup}>
        <div onClick={() => navigate("/archive")}>Meme Archive</div>
        <div className={styles.divider}>/</div>

        <div onClick={() => navigate("/creation")}>Meme Creation</div>
        <div className={styles.divider}>/</div>

        <div onClick={() => navigate("/community")}>Community</div>
        <div className={styles.divider}>/</div>

        <div onClick={() => navigate("/mypage")}>My Page</div>
      </div>

      {/* Sign In + 화살표 */}
      <div className={styles.signInWrap}>
        <span className={styles.signIn}>Sign in</span>
        <img src={ArrowRightPurple} className={styles.arrow} alt="arrow" />
      </div>

    </div>
  );
};

export default Header;
