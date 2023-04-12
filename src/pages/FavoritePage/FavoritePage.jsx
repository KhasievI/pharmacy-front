import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMedicines } from "../../redux/features/medicineSlice";
import styles from "./FavoritePage.module.scss";
import FavoriteProduct from "./FavoriteProduct";

const FavoritePage = () => {
  const fav = JSON.parse(localStorage.getItem("fav"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedicines());
  }, []);

  const medicines = useSelector((state) => state.medicine.medicines);
  const favoriteMeds = medicines.filter((med) => {
    return fav?.includes(med.medName);
  });
  return (
    <div className={styles.styles}>
      <div className={styles.wrapper}>
        <div className={styles.path}>
          <Link className={styles.a} to='/'>
            Главная страница
          </Link>{" "}
          {" / "}Избранное
        </div>
        {favoriteMeds.length ? (
          <h1 className={styles.title}>Избранное</h1>
        ) : (
          <>
            {" "}
            <h1 className={styles.title}>Избранное</h1>
            <h3 className={styles.title}>В избранном пусто</h3>
          </>
        )}
        <div className={styles.list}>
          {favoriteMeds.map((medicine) => {
            return <FavoriteProduct medicine={medicine} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
