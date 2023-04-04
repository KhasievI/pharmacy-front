import React from "react";
import MapHeader from "../../components/MapHeader/MapHeader";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home_page}>
      <div className={styles.wrapper}>
        <MapHeader />
      </div>
    </div>
  );
};
