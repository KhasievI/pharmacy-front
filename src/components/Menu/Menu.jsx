import React from "react";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.ul}>
          <li>
            <Link to='/'>ГЛАВНАЯ</Link>
          </li>
          <li>
            <Link to='/items'>КАТАЛОГ</Link>
          </li>
          <li>
            <Link to='/us'>О НАС</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
