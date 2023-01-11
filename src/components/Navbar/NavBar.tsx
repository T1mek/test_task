import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className={styles.wrapper}>
      <Link className={styles.nav} to="/about">
        Обо мне
      </Link>

      <Link className={styles.nav} to="/portfolio">
        Портфолио
      </Link>
      <Link className={styles.nav} to="/blog">
        Блог
      </Link>
    </ul>
  );
};

export default NavBar;
