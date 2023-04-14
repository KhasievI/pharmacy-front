import React from "react";
import AdverSlider from "../../components/Advertisement/AdverSlider";
import PharmacyList from "../../components/PharmacyList/PharmacyList";

import styles from "./HomePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPharmacies } from "../../redux/features/pharmacySlice";
import { useEffect } from "react";

export const HomePage = () => {
const dispatch = useDispatch()
const pharmacies = useSelector((state) => state.pharmacy.pharmacies)

useEffect(() => {
  dispatch(getPharmacies())
}, [])
  
if (!pharmacies) {
  return "Loading..."
}
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
