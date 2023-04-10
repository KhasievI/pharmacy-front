import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, switchCategory } from "../../redux/features/categorySlice";
import { getPharmacies, switchPharmacy, switchPharmasy } from "../../redux/features/pharmacySlice";
import styles from "./SortPanel.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { switchTypeDosage } from "../../redux/features/medicineSlice";

const SortPanel = ({ valuePrice, setValuePrice, selectCategory, setSelectCategory }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getPharmacies());
  }, []);

  const pharmacies = useSelector((state) => state.pharmacy.pharmacies.pharmacies);
  const categories = useSelector((state) => state.category.categories);
  const typesDosage = useSelector((state) => state.medicine.typeDosage);
  console.log(pharmacies);
  const handleCategory = (value) => {
    dispatch(switchCategory(value));
  };

  const handleTypeDosage = (value) => {
    dispatch(switchTypeDosage(value));
  };

  const handlePharmacies = (value) => {
    dispatch(switchPharmacy(value));
  };

  const handleChange = (event, newValue) => {
    setValuePrice(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  if (!pharmacies) {
    console.log("loading");
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.price}>
          <h2>Розничная цена</h2>
          <div className={styles.range}>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={valuePrice}
                max={9999}
                min={0}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
                style={{ color: "black" }}
              />
            </Box>
            <div className={styles.labels}>
              <label htmlFor='' className={styles.label}>
                <span>от</span>
                <input
                  type='number'
                  value={valuePrice[0]}
                  max={9999}
                  min={0}
                  id='input-2'
                  placeholder='от 100'
                />
                <span>₱</span>
              </label>
              <label htmlFor='' className={styles.label}>
                <span>до</span>
                <input
                  type='number'
                  value={valuePrice[1]}
                  max={9999}
                  min={0}
                  id='input-2'
                  placeholder='до 9999'
                />
                <span>₱</span>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <h2 className={styles.title}>Категория</h2>
          <ul className={styles.list}>
            {categories &&
              categories.map((cat) => {
                return (
                  <div key={cat._id} onClick={() => handleCategory(cat.name)} className={styles.li}>
                    {cat.name}
                  </div>
                );
              })}
          </ul>
        </div>
        <div className={styles.pharmasy}>
          <h2 className={styles.title}>Аптека</h2>
          <ul className={styles.list}>
            {pharmacies &&
              pharmacies.map((pharmacy) => {
                return (
                  <div
                    onClick={() => handlePharmacies(pharmacy.pharmacyName)}
                    key={pharmacy._id}
                    className={styles.li}>
                    {pharmacy.pharmacyName}
                  </div>
                );
              })}
          </ul>
        </div>
        <div className={styles.tablets_type}>
          <h2 className={styles.title}>Лекарственная форма</h2>
          <ul className={styles.list}>
            {typesDosage.map((form, i) => {
              return (
                <div onClick={() => handleTypeDosage(form)} key={i} className={styles.li}>
                  {form}
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
