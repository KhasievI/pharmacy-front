import React from "react";
import styles from "./MedItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMedicines } from "../../redux/features/medicineSlice";
import { useParams } from "react-router";
import { addItemToCard } from "../../redux/features/cartSlice";
import { useState } from "react";
import { getPharmacies, getPharmacy } from "../../redux/features/pharmacySlice";

export const MedItem = () => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchMedicines())
    dispatch(getPharmacies())
    dispatch(getPharmacy())
  }, [dispatch])

  const medicine = useSelector((state) => state.medicine.medicines.find(med => {
    return med._id === id
  }))

  const addToCard = (medicine) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const obj = {
      medId: medicine._id,
      img: medicine.img,
      count: 1,
      price: +(medicine.price),
      pharmacy: medicine.pharmacyName,
    };
    if (cart) {
      const newCart = [...cart, obj];
      dispatch(addItemToCard(newCart));
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [obj];
      dispatch(addItemToCard(newCart));
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    setDisabled(false);
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart?.map((prod) => prod.medId === medicine._id && setDisabled(true))
  }, [cartItems]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_blok}>
          <img className={styles.img256} src={medicine.img} alt="изображение" />
        </div>
        <div className={styles.blok_info}>
          <div className={styles.b1}>
            <h1>{medicine.medName}</h1>
          </div>
          <div className={styles.barcode}>
            <p>Штрих-код: </p>
            <h4>{medicine.barcode}</h4>
          </div>
          <div className={styles.category}>
            <p>Категория: </p>
            <h4>{medicine.category}</h4>
          </div>
          <div className={styles.barcode}>
            <p>Вид лекарственной формы: </p>
            <h4>{medicine.typeOfDosageForm}</h4>
          </div>
          <div className={styles.methodOfAdministrationAndDose}>
            <p>Cпособ применения и дозы: </p>
            <h4>{medicine.methodOfAdministrationAndDose}</h4>
          </div>
          <div className={styles.price}>
            <h1>{medicine.price}₽</h1>
          </div>
          <div className={styles.b4}>
            <button className={styles.knopka22} disabled={disabled}
              onClick={() => addToCard(medicine)}>
              {disabled ? 'Уже в корзине' : 'В корзину'}</button>
          </div>
        </div>
      </div>
    </>
  );
};