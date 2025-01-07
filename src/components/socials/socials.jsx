import React from "react";
import {
  PiFacebookLogo,
  PiTwitterLogo,
  PiInstagramLogo,
  PiRedditLogo,
} from "react-icons/pi";
import styles from "./socialsStyles.module.css";

export default function Socials() {
  return (
    <>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PiFacebookLogo className={styles.socialIcon} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PiTwitterLogo className={styles.socialIcon} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PiInstagramLogo className={styles.socialIcon} />
      </a>
      <a
        href="https://www.reddit.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PiRedditLogo className={styles.socialIcon} />
      </a>
    </>
  );
}
