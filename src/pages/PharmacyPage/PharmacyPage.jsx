import React from "react";
import PharmacyList from "../../components/PharmacyList/PharmacyList";

import styles from "./PharmacyPage.module.scss";

export const PharmacyPage = () => {
  return (
    <div className={styles.home_page}>
      <div className={styles.wrapper}>
        <h1>Выберите аптеку</h1>
        <PharmacyList />
      </div>
    </div>
  );
};
