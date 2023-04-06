import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMedicines } from "../../redux/features/medicineSlice";
import styles from "./List.module.scss";

const List = () => {
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedicines());
  }, []);
  const medicines = useSelector((state) => state.medicine.medicines);
  if (!medicines) {
    return "..";
  }
  console.log(medicines);
  return (
    <div className={styles.list}>
      {medicines.map((medicine) => {
        return (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onMouseDown={() => setFocus(!focus)}
            className={styles.cardblock}
            key=''>
            <img className={styles.card_img} src={`${medicine.img}`} alt='' />
            <svg
              className={focus ? styles.focus_btn : active ? styles.active : styles.favorite_btn}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 19.109 18.013'>
              <path
                d='M17.9,8.809a5.356,5.356,0,0,0-1.3-6.975A4.3,4.3,0,0,0,10.3,3.26a6.843,6.843,0,0,0-.452,1.058A6.842,6.842,0,0,0,9.381,3.26,4.271,4.271,0,0,0,3.1,1.834,5.387,5.387,0,0,0,1.812,8.809c.6,1.031,8.035,8.693,8.035,8.693S17.284,9.841,17.9,8.809Z'
                transform='translate(-0.302 -0.239)'></path>
            </svg>
            <div className={styles.card_text}>
              <div className={styles.card_title}>{medicine.medName}</div>
              <div className={styles.price_cart_block}>
                <div className={styles.card_price}>{medicine.price}₽</div>
                <div className={styles.cart_btn}>В корзину</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
