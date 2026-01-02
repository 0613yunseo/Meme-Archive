import React from "react";
import styles from "./KeywordPill.module.css";

export default function KeywordPill({ text = "키워드", className = "" }) {
  return (
    <div className={`${styles.pill} ${className}`}>
      {text}
    </div>
  );
}
