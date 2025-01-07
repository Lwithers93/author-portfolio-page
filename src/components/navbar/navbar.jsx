import React from "react";
import styles from "./navbarStyles.module.css";

export default function Navbar(props) {
  const { selection, setSelection } = props;
  const options = ["home", "books", "projects", "contact"];

  console.log("selection value: ", selection);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
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
