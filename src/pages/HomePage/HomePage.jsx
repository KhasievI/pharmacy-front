import React from "react";
import AdverSlider from '../../components/Advertisement/AdverSlider';
import { useDispatch, useSelector } from 'react-redux'
import { getPharmacies } from "../../redux/features/pharmacySlice";
import styles from "./HomePage.module.scss";



export const HomePage = () => {
  const pharmacies = useSelector((state) => state.pharmacy.pharmacies)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getPharmacies())
  }, [])

  console.log(pharmacies);

  if (!pharmacies) {
    return 'Loading...'
  }
  return (
    <div className={styles.home_page}>
      <div>
        <AdverSlider />
      </div>
      <div>
        {pharmacies.map((pharm) => {
          return (
            <div className={styles.conteiner}>
              <div>
                <div className={styles.wrapper}>
                  <img className={styles.logo} src={`http://localhost:4141/${pharm.logo}`} alt='logo' />
                  <div className={styles.pharmacyName}>{pharm.pharmacyName}</div>
                  <div className={styles.card_price}>{pharm.address}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

