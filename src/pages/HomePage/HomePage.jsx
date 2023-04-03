import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { checkIsAuth } from '../../redux/features/pharmacySlice'
// import { getPharmacy } from '../../redux/features/pharmacySlice'
import styles from "./HomePage.module.scss";


export const HomePage = () => {
  const isAuth = useSelector(checkIsAuth)
  // const dispatch = useDispatch()
  const pharmacy = useSelector((state) => state.pharmacy.pharmacy)
console.log(pharmacy);

  return (
    <div className={styles.home_page}>
    {isAuth ? 
    <Link to={`/${pharmacy._id}`}>
      <button>Личный кабинет</button>
      </Link> : <Link to='/login'>
      <button>Войти</button>
      </Link>}
    </div>
  );
};
