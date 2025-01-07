import React from "react";
import styles from "./contactStyles.module.css";

import { motion } from "framer-motion"; // For animation on load

export default function Books() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.formContainer}>
        <motion.form
          initial={{ opacity: 0, y: 40 }} // Start hidden and slightly below
          animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
          transition={{ duration: 1, delay: 0.25 }} // 1-second animation
          action="#"
          method="POST"
          className={styles.contactForm}
        >
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={styles.formInput}
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={styles.formInput}
          />
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            className={styles.formMsg}
          />
          <input type="submit" value="Submit" className={styles.formBtn} />
        </motion.form>
      </div>
      <div className={styles.titleContainer}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }} // Start hidden and slightly below
          animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
          transition={{ duration: 1, delay: 0.75 }} // 1-second animation
        >
          Contact Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.25 }} // Delayed animation
          className={styles.socialLinks}
        >
          <Socials />
        </motion.div>
      </div>
    </div>
  );
}
