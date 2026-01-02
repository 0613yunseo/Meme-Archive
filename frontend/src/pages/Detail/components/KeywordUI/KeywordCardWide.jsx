import React from "react";
import styles from "./KeywordCardWide.module.css";

export default function KeywordCardWide({ className = "" }) {
  return <div className={`${styles.card} ${className}`} />;
}
