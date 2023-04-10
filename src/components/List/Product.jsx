import React, { useState } from "react";
import styles from "./List.module.scss";

const Product = ({ medicine }) => {
  const [active, setActive] = useState(false);
  const fav = localStorage.getItem("fav");
  const arr = JSON.parse(fav);
  const medFav = arr.includes(medicine.medName);
  const [focus, setFocus] = useState(medFav);

  const handleFavorite = (productName) => {
    const fav = localStorage.getItem("fav");
    if (fav) {
      if (fav.includes(productName)) {
        const arr = JSON.parse(fav).filter((med) => {
          return med.toLowerCase() !== productName.toLowerCase();
        });
        setFocus(false);
        localStorage.setItem("fav", JSON.stringify(arr));
      } else {
        setFocus(true);
        const arr = JSON.parse(fav);
        arr.push(productName);
        localStorage.setItem("fav", JSON.stringify(arr));
        console.log(arr);
      }
    } else {
      setFocus(true);
      const arr = [];
      arr.push(productName);
      localStorage.setItem("fav", JSON.stringify(arr));
    }
  };

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={styles.cardblock}
      key=''>
      <img className={styles.card_img} src={`${medicine.img}`} alt='' />
      <svg
        onClick={() => handleFavorite(medicine.medName)}
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
};

export default Product;
