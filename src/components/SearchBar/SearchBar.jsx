import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const logIn = (
    <div className={styles.logIn}>
      <div className={styles.logInIcon}>
        <img src="logIn.png" alt="" />
      </div>
      Войти
    </div>
  );

  const profile = ( <div className={styles.profile}>
    <div className={styles.profLogo}>
      <img src="profileLogo.png" alt="" />
    </div>
    Профиль
  </div>)

  return (
    <div className={styles.searchMain}>
      <div className={styles.searchChild}>
        <div className={styles.logo}>
          <img src="logo.png" alt="" />
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInp}
            value={search}
            onChange={handleSearchChange}
          />
          {/* <button className={styles.searchBtn}>Найти</button> */}
        </div>
      </div>
      <div className={styles.favorite}>
        <div className={styles.favLogo}>
          <img src="favLogo.png" alt="" />
        </div>
        Избранное
      </div>
      {profile}
    </div>
  );
};

export default SearchBar;
