import React from "react";
import styles from "./footerStyles.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>Alexander Heathcliffe &copy; {year}</div>
  );
}
