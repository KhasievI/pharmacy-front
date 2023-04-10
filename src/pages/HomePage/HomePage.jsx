import React, { useState } from "react";
import AdverSlider from "../../components/Advertisement/AdverSlider";
import PharmacyList from "../../components/PharmacyList/PharmacyList";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home_page}>
      <div className={styles.AdverSlider}>
        <AdverSlider />
      </div>
      <div className={styles.wrapper}>
        <h1>Наши аптеки</h1>
        <PharmacyList />
      </div>
    </div>
  );
};
