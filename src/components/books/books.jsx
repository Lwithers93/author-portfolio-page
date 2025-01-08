import React from "react";
import styles from "./booksStyles.module.css";
import Socials from "../socials/socials";

import { motion } from "framer-motion"; // For animation on load

export default function Books() {
  const btnLink = <button>Buy on Amazon</button>;
  const books = [
    {
      id: 0,
      name: "The Enchanted Kingdom",
      description:
        "In a mystical land where magic flows through every tree and river, a young orphan named Elara discovers a hidden realm within her own kingdom. Tasked with restoring balance to a fractured world, she must confront an ancient evil that threatens to plunge the land into darkness. As she gathers unlikely allies, Elara learns that her destiny is tied to the very heart of the Enchanted Kingdom.",
      image: "/src/assets/kingdom.png",
      review:
        "The Enchanted Kingdom is a beautifully crafted tale full of magic, adventure, and heart. The world-building is rich and immersive, making it easy to get lost in Elara’s journey of self-discovery and bravery.",
      button: btnLink,
    },
    {
      id: 1,
      name: "Whispers of the Forest",
      description:
        "Lena, a young healer with an innate connection to nature, is drawn into the heart of an ancient forest when the trees begin whispering of an impending calamity. As dark forces encroach upon the peaceful woodland, Lena uncovers the secrets that bind the forest’s magic to the fate of her people. With the help of mysterious forest guardians, she must unlock the power hidden in the whispers to save both the forest and her village.",
      image: "/src/assets/forest.png",
      review:
        "Whispers of the Forest captivates with its enchanting setting and the poignant journey of its heroine. Lena’s connection with the natural world is beautifully portrayed, making the forest itself feel like a character in the story.",
      button: btnLink,
    },
    {
      id: 2,
      name: "Tales from Theria",
      description:
        "Theria is a land filled with mythical creatures, powerful sorcery, and forgotten legends. This collection of tales weaves together stories of brave adventurers, wise sages, and the enigmatic forces that shape the world, all set in a land where myth and reality collide. Each story explores the intertwining fates of Theria's inhabitants, from the high towers of the royal city to the deep caves of the underground kingdoms.",
      image: "/src/assets/theria.png",
      review:
        "Tales from Theria is a spellbinding anthology that offers a wide range of magical adventures. With each story, the author masterfully blends myth and history, leaving readers eager for more of the fantastical world of Theria.",
      button: btnLink,
    },
  ];
  let del = 0.25;

  return (
    <div className={styles.booksContainer}>
      <motion.h1
        initial={{ opacity: 0, y: 40 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ duration: 1, delay: del }} // 1-second animation
        className={styles.booksTitle}
      >
        Books
      </motion.h1>
      <div className={styles.booksTable}>
        {books.map((book) => {
          del += 0.5;
          console.log(book);
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }} // Start hidden and slightly below
              animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
              transition={{ duration: 1, delay: del }} // 1-second animation
              key={book.id}
              className={styles.bookEntry}
            >
              <div className={styles.bookImage}>
                <img
                  src={book.image}
                  alt={book.name}
                  className={styles.bookImg}
                />
              </div>

              <div className={styles.bookTitle}>
                <h2>{book.name}</h2>
              </div>
              <div className={styles.bookReview}>{book.review}</div>
              <div className={styles.bookDescription}>{book.description}</div>
              <div className={styles.bookLink}>{book.button}</div>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.25 }} // Delayed animation
        className={styles.socialLinks}
      >
        <Socials />
      </motion.div>
    </div>
  );
}
