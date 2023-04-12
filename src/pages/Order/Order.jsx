import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Order.module.scss'
import { useEffect } from 'react';
import { deleteCart, getCart } from '../../redux/features/cartSlice';
import { getPharmacy } from '../../redux/features/pharmacySlice';

export const Order = () => {
  const pharmacy = useSelector((state) => state.pharmacy.pharmacy)
  const carts = useSelector((state) => state.cart.carts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPharmacy())
    dispatch(getCart(pharmacy.pharmacyName))
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  }

  console.log('carts', carts);

  if (!carts) {
    return 'Loading...'
  }

  return (
    <React.Fragment>
      {carts?.map(item => {
        return (
          <div className={styles.wrapper}>
            <ul>
              {item?.customer?.map((customer) => {
                return (
                  <div className={styles.customer}>
                    <div>КЛИЕНТ:</div>
                    <div>имя: {customer?.name}</div>
                    <div>номер телефона: {customer?.phone}</div>
                    <div>населенный пункт: {customer?.city}</div>
                    <div>улица: {customer?.street}</div>
                    <div>номер дома / квартиры {customer?.houseNumber}</div>
                    <div>комментарии: {customer?.comment}</div>
                    <img onClick={() => handleDelete(item?._id)} className={styles.delete} src='del.png' alt="img" />
                  </div>
                )
              })}
              {item?.cart?.map((cart) => {
                return (
                  <li className={styles.orders} key={cart.id}>
                    <div>ЛЕКАРСТВО:</div>
                    <img src={cart.img} alt="img" />
                    <div>id: {cart.medId}</div>
                    <div>количество: {cart.count}</div>
                    <div>цена: {cart.price}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </React.Fragment>
  );
};