import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/features/categorySlice";
import { getPharmacies } from "../../redux/features/pharmacySlice";
import styles from "./SortPanel.module.scss";

const SortPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getPharmacies());
  }, []);
  const pharmacies = useSelector((state) => state.pharmacy.pharmacies.pharmacies);
  const categories = useSelector((state) => state.category.categories);

  if (!pharmacies) {
    console.log("loading");
  }
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.price}>
          <h3 className={styles.title}>Розничная цена</h3>
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
          <h3>Аптека</h3>
          <ul className={styles.list}>
            {pharmacies &&
              pharmacies.map((pharmacy) => {
                return (
                  <div>
                    <input type='checkbox' />
                    {pharmacy.pharmacyName}
                  </div>
                );
              })}
          </ul>
        </div>
        <div className={styles.tablets_type}>
          <h3>Лекарственная форма</h3>
          <ul>
            {categories &&
              categories.map((cat) => {
                return (
                  <div>
                    <input type='checkbox' />
                    {cat.name}
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortPanel;
