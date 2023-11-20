import React from "react";
import logo from "../images/profile.jpg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li>Home page</li>
            <li>Products</li>
            <li>About US</li>
          </ul>
        </div>
        <div className={styles.logo}>
          <img className={styles.logo} src={logo} alt="error"></img>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
