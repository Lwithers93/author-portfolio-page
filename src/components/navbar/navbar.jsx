import React from "react";
import styles from "./navbarStyles.module.css";
import { IoBookOutline } from "react-icons/io5";

export default function Navbar(props) {
  const { selection, setSelection } = props;
  const options = ["home", "books", "contact"];

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={setSelection(options[0])}>
        <IoBookOutline className={styles.img} />
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
