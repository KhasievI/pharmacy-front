import React from "react";
import styles from "./FarmPage.module.scss";

export const PharmPage = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.a1}> <img className={styles.img1} src="neo.jpg" alt="изображение" /> </div>
        <div className={styles.a2}>
          <div className={styles.h56} >
            <h1>Name</h1>
            <h3>Address</h3>
            <h3>License</h3>
            <h3>Inn</h3>
            <h3>Ogrn</h3>
          </div>
        </div>
      </div>
    </>
  );
};