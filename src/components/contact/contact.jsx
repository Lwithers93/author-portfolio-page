import React, { useState } from "react";
import styles from "./contactStyles.module.css";
import Socials from "../socials/socials";

import { motion } from "framer-motion"; // For animation on load

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && message) {
      setSubmitted(true); // Fake submission for demonstration purposes
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <div className={styles.contactContainer}>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }} // Start hidden and slightly below
          animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
          transition={{ duration: 1, delay: 0.25 }} // 1-second animation
          className={styles.submitMsg}
        >
          <h2>Thank you for your message!</h2>
          <p>I'll get back to you shortly.</p>
        </motion.div>
      ) : (
        <div className={styles.formContainer}>
          <motion.form
            initial={{ opacity: 0, y: 40 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
            transition={{ duration: 1, delay: 0.25 }} // 1-second animation
            onSubmit={handleSubmit}
            className={styles.contactForm}
          >
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              className={styles.formInput}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              className={styles.formInput}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              className={styles.formMsg}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input type="submit" value="Submit" className={styles.formBtn} />
          </motion.form>
        </div>
      )}
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
