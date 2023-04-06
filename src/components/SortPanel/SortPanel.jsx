import React from "react";
import styles from "./SortPanel.module.scss";

const SortPanel = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.price}>
          <span className={styles.title}>Розничная цена</span>
          <div className={styles.labels}>
            <label htmlFor='' className={styles.label}>
              <span>от</span>
              <input type='number' max={100} min={9999} id='input-2' placeholder='от 100' />
              <span>₱</span>
            </label>
            <label htmlFor='' className={styles.label}>
              <span>до</span>
              <input type='number' max={100} min={9999} id='input-2' placeholder='до 9999' />
              <span>₱</span>
            </label>
          </div>
        </div>
        <div className={styles.pharmasy}>
          <span>Аптеки</span>
          <div className={styles.list}></div>
        </div>
        <div className={styles.tablets_type}></div>
      </div>
    </div>
  );
};

export default SortPanel;
