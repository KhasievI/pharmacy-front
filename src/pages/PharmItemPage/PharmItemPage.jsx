import React from "react";
import styles from "./PharmItemPage.module.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPharmacies } from "../../redux/features/pharmacySlice";
import { useEffect } from "react";

export const PharmItemPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPharmacies())
    window.scrollTo(0, 0)
  }, [])

  const pharm = useSelector((state) => state.pharmacy.pharmacies.find(el => {
    return el._id === id
  }))

  if (!pharm) {
    return 'Loading ...'
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.a1}>
          <img className={styles.img1} src={`http://localhost:4141/${pharm.logo}`} alt="изображение" />
        </div>
        <div className={styles.a2}>
          <div className={styles.h56} >
            <h1>"{pharm.pharmacyName}"</h1>
            <p>Адрес</p>
            <h3>{pharm.address}</h3>
            <p>Лицензия</p>
            <h3>{pharm.license}</h3>
            <p>ИНН</p>
            <h3>{pharm.inn}</h3>
            <p>ОГРН</p>
            <h3>{pharm.ogrn}</h3>
          </div>
        </div>
      </div>
    </>
  );
};