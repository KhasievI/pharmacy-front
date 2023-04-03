import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header2}>
        <div className={styles.blok}>
          <img
          
            className={styles.img_logo}
            src="apteka12.png"
            alt="изображение"
          />
        </div>

        <div className={styles.blok}>
          <img
            className={styles.admin_siz}
            src="siz122.png"
            alt="изображение"
          />
          <p>Профиль</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
