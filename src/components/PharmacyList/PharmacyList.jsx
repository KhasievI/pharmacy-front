import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cleanCategories } from "../../redux/features/categorySlice"
import { cleanTypeDosage } from "../../redux/features/medicineSlice"
import { cleanPharmacies, getPharmacies, switchPharmacy } from "../../redux/features/pharmacySlice"
import styles from "./PharmacyList.module.scss"

const PharmacyList = ({ valuePrice }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cleanCategories())
    dispatch(cleanTypeDosage())
    dispatch(cleanPharmacies())
    dispatch(getPharmacies())
    window.scrollTo(0, 0)
  }, [])

  const pharmacies = useSelector((state) => state.pharmacy.pharmacies)

  const handlePharmacies = (value) => {
    navigate(`pharm/${value}`)
    dispatch(switchPharmacy(value))
  }

  if (!pharmacies) {
    return "..";
  }

  return (
    <div className={styles.list}>
      {pharmacies.map((pharmacy) => {
        return (
          <div className={styles.cardblock} onClick={() => handlePharmacies(pharmacy._id)}>
            <img
              className={styles.card_img}
              src={`http://localhost:4141/${pharmacy.logo}`}
              alt=''
            />
            <div className={styles.card_text}>
              <div className={styles.card_title}>{pharmacy.pharmacyName}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PharmacyList;
