import React from "react";
import styles from "./KeywordPill.module.css";

export default function KeywordPill({ text = "Funny", className = "" }) {
  return (
    <div className={`${styles.pill} ${className}`}>
      {text}
    </div>
  );
}
