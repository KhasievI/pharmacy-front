import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicines } from "../../redux/features/medicineSlice";
import { getPharmacies } from "../../redux/features/pharmacySlice";
import styles from "./PharmacyList.module.scss";

const PharmacyList = ({ valuePrice }) => {
  useEffect(() => {
    dispatch(getPharmacies());
  }, []);

  const dispatch = useDispatch();
  const pharmacies = useSelector((state) => state.pharmacy.pharmacies);

  console.log(pharmacies);
  if (!pharmacies) {
    return "..";
  }
  return (
    <div className={styles.list}>
      {pharmacies.map((pharmacy) => {
        console.log(pharmacy);
        return (
          <div className={styles.cardblock}>
            <img
              className={styles.card_img}
              src={`http://localhost:4141/${pharmacy.logo}`}
              alt=''
            />
            
            <div className={styles.card_text}>
              <div className={styles.card_title}>{pharmacy.pharmacyName}</div>
              <div className={styles.price_cart_block}>
                <div className={styles.cart_btn}>Перейти к товарам</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PharmacyList;
