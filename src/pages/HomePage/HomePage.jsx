import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { checkIsAuth } from '../../redux/features/pharmacySlice'
// import { getPharmacy } from '../../redux/features/pharmacySlice'
import styles from "./HomePage.module.scss";


export const HomePage = () => {
  const isAuth = useSelector(checkIsAuth)
  // const dispatch = useDispatch()
  

  return (
    <div className={styles.home_page}>
    {isAuth ? 
    <Link to={`/me`}>
      <button>Личный кабинет</button>
      </Link> : <Link to='/login'>
      <button>Войти</button>
      </Link>}
    </div>
  );
};
