import React from "react";
import styles from "./navbarStyles.module.css";

export default function Navbar(props) {
  const { selection, setSelection } = props;
  const options = ["home", "books", "contact"];

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={setSelection(options[0])}>
        <img src="src/assets/book.png" alt="book-icon" />
      </div>
      <div className={styles.navbar}>
        {options.map((option, index) => {
          return (
            <div
              onClick={setSelection(option)}
              className={styles.navItem}
              key={index}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}
