import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPizzaSlice,
  faBars,
  faXmark,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogoDiv}>
        <NavLink to="/" className={styles.headerLogo}>
          <FontAwesomeIcon icon={faPizzaSlice} />
          <p>PizzaShop</p>
        </NavLink>
      </div>

      <div>
        <button onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.headerHamburguerIcon}
          />
        </button>
      </div>

      <nav
        className={`${styles.headerNav} ${menu ? styles.headerNavActive : ""}`}
      >
        <ul className={styles.headerUl}>
          <div className={styles.headerCloseDiv}>
            <button onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={faXmark}
                className={styles.headerCloseIcon}
              />
            </button>
          </div>
          <li onClick={toggleMenu} className={styles.headerItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={toggleMenu} className={styles.headerItem}>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li onClick={toggleMenu} className={styles.headerItem}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink to="/user" className={styles.headerUserIcon}>
              <FontAwesomeIcon icon={faUser} alt="User" title="User" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
