import React from "react";
import styles from "./heroStyles.module.css";
import { motion } from "framer-motion"; // For animation on load
import Socials from "../socials/socials";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.titleContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
            transition={{ duration: 1, delay: 0.25 }} // 1-second animation
          >
            Alexander Heathcliffe
          </motion.h1>
        </div>
        <div className={styles.socialsContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }} // Delayed animation
            className={styles.socialLinks}
          >
            <Socials />
          </motion.div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={`${styles.heroSubUpper} ${styles.summaryContainer}`}>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }} // Delayed animation
            className={styles.summery}
          >
            Fantasy author. Semi professional magician. Will trade signed copies
            of my books for dragon sketches. 'The Enchanted Kingdom' and
            'Whispers of the Forest' are available now in ebook, audiobook, and
            paperback.
          </motion.p>
        </div>
        <div className={styles.buttonContainer}>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }} // Delayed animation
            className={styles.storeButton}
          >
            Store
          </motion.button>

          <div className={styles.socials2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }} // Delayed animation
            >
              <Socials />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
