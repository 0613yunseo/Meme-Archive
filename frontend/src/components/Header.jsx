// src/components/Header.jsx
import styles from "./Header.module.css";
import svgPaths from "../assets/arrow-up-right.svg";
import { Link } from "react-router-dom";


function Frame8() {
  return (
    <div className={styles.iconWrap}>
      <img src={svgPaths} alt="icon" />
    </div>
  );
}

function Frame70() {
  return (
    <div className={styles.menuWrap}>
      <Link to="/archive">Meme Archive</Link>
      <p>/</p>
      <p>Meme Creation</p>
      <p>/</p>
      <Link to="/community">Community</Link>
      <p>/</p>
      <p>My Page</p>
    </div>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>TrendArc</Link>

      <Frame70 />

      <div className={styles.rightIcon}>
        <Frame8 />
      </div>

      <p className={styles.signIn}>Sign in</p>
    </header>
  );
}
