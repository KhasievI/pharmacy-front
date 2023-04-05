import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.ul}>
          <li>
            {" "}
            <a href="">КАТАЛОГ</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">БРЕНДЫ</a>{" "}
          </li>
          <li>
            <a href="">АКЦИИ</a>{" "}
          </li>
          <li>
            <a href="">О НАС</a>{" "}
          </li>
          <li>
            <a href="">COVID-19</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">НОВИНКИ</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">ПОДАРКИ</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">НОВОСТИ</a>{" "}
          </li>
        </ul>
      </div>
      <div className={styles.blok}>
        <p>
          {" "}
          <b>Уважаемые клиенты!</b> В связи с нестабильной ситуацией и
          неустойчивым курсом валют, цены на товары могут отличаться от
          заявленных на сайте. Мы всегда рады предоставить
        </p>
        <p>
          лучшее - наша консьерж-служба даст уточнения и рекомендации:
          +7(499)390 49 16. <b>Спасибо за понимание.</b>
        </p>
      </div>
    </>
  );
};

export default Menu;
