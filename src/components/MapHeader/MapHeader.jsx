import React, { useState } from "react";
import styles from "./MapHeader.module.scss";

const MapHeader = () => {
  const [active, setActive] = useState(false);
    // geolocation.getCurrentPosition()
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.selected_pharmasy}>
          <img
            className={styles.icon}
            src='https://cdn4.iconfinder.com/data/icons/medic-two-tone/32/Case_-1024.png'
            alt=''
          />{" "}
          Выбрать ближайшую аптеку
        </div>
        <div className={styles.menu_li}>Контакты</div>
        <div
          className={styles.help}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}>
          Помощь{" "}
          <img
            className={styles.help_icon}
            src='https://cdn1.iconfinder.com/data/icons/essentials-pack/96/down_bottom_downward_arrow_navigation-1024.png'
            alt=''
          />
          {active && (
            <div className={styles.modal}>
              <div className={styles.li}>Где получить заказ</div>
              <div className={styles.li}>Доставка и оплата</div>
            </div>
          )}
        </div>
        <div className={styles.menu_li}>Партнеры</div>
        <div className={styles.info}>
          Персональные консультации и помощь:{" "}
          <div className={styles.number}>+7 (499) 390 49 16</div>
        </div>
      </div>
    </div>
  );
};

export default MapHeader;

{
  /* <iframe
  className={styles.map}
  src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d78114.26205538989!2d45.69668848229886!3d43.31556792759013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1680604238923!5m2!1sru!2sru'
  allowfullscreen=''
  loading='lazy'
  referrerpolicy='no-referrer-when-downgrade'></iframe> */
}
