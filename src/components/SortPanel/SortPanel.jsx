import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/features/categorySlice";
import { getPharmacies } from "../../redux/features/pharmacySlice";
import styles from "./SortPanel.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const medForms = [
  "капли",
  "настойка",
  "настои",
  "сироп",
  "суспензия",
  "эмульсия",
  "капсула",
  "таблетка",
  "порошки",
  "гранулы",
  "драже",
  "карамель",
  "карандаш",
  "мазь",
  "гель",
  "суппозитории",
  "паста",
  "крем",
  "аэрозоли",
];

const SortPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getPharmacies());
  }, []);

  const pharmacies = useSelector((state) => state.pharmacy.pharmacies.pharmacies);
  const categories = useSelector((state) => state.category.categories);

  const [value, setValue] = React.useState([0, 9999]);
  const [category, setCategory] = React.useState("");
  console.log("sdas", categories);
  const handleCat = (value) => {
    setCategory(value);
    console.log(value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <h3 className={styles.title}>Розничная цена</h3>
          <div className={styles.range}>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
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
                  value={value[0]}
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
                  value={value[1]}
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
        <div className={styles.pharmasy}>
          <h3>Категории</h3>
          <select className={styles.select}>
            {categories &&
              categories.map((cat) => {
                return (
                  <option className={styles.li}>
                    <input
                      onChange={(e) => handleCat(e.targer.value)}
                      className={styles.chek}
                      type='checkbox'
                    />
                    {cat.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className={styles.pharmasy}>
          <h3>Аптека</h3>
          <ul className={styles.list}>
            {pharmacies &&
              pharmacies.map((pharmacy) => {
                return (
                  <div className={styles.li}>
                    <input className={styles.chek} type='checkbox' />
                    {pharmacy.pharmacyName}
                  </div>
                );
              })}
          </ul>
        </div>
        <div className={styles.tablets_type}>
          <h3>Лекарственная форма</h3>
          <ul>
            {medForms.map((form) => {
              return (
                <div className={styles.li}>
                  <input className={styles.chek} type='checkbox' />
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
