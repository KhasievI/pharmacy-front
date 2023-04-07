import React, { useState } from "react";
import AdverSlider from '../../components/Advertisement/AdverSlider';

import styles from "./HomePage.module.scss";


export const HomePage = () => {

  return (
    <div className={styles.home_page}>
      <AdverSlider/>
    </div>
  );
};

