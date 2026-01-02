import React from "react";
import styles from "./KeywordCardTall.module.css";

export default function KeywordCardTall({ className = "" }) {
  return <div className={`${styles.card} ${className}`} />;
}
