import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Order.module.scss'
import { useEffect } from 'react';
import { deleteCart, getCart, getCarts } from '../../redux/features/cartSlice';
import { getPharmacy } from '../../redux/features/pharmacySlice';

export const Order = () => {
  const dispatch = useDispatch()
  const pharmacy = useSelector((state) => state.pharmacy.pharmacy)
  const carts = useSelector((state) => state.cart.carts)

  const cart = carts?.filter(el => el?.cart[0]?.pharmacy === pharmacy.pharmacyName)


  console.log('cart', cart);
  console.log('carts', carts);

  useEffect(() => {
    dispatch(getPharmacy())
    dispatch(getCarts())
    if (cart?.length > 0) {
      dispatch(getCart(cart[0]._id))
    }
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  }

  if (!carts) {
    return 'Loading...'
  }

  return (
    <React.Fragment>
      {cart?.map((item, i) => {
        return (
          <div className={styles.wrapper}>
            <ul>
              {item?.customer?.map((customer) => {
                return (
                  <div className={styles.customer}>
                    <h2>ЗАКАЗ № {i + 1}</h2>
                    <h3>Имя: {customer?.name}</h3>
                    <h3>Номер телефона: {customer?.phone}</h3>
                    <h3>Населенный пункт: {customer?.city}</h3>
                    <h3>Улица: {customer?.street}</h3>
                    <h3>Дома / квартира: {customer?.houseNumber}</h3>
                    {customer?.comment && <h4>Комментарии: {customer?.comment}</h4>}
                    <button onClick={() => handleDelete(item?._id)} className={styles.delete}><h3>Закрыть</h3></button>
                  </div>
                )
              })}
              {item?.cart?.map((cart) => {
                return (
                  <li className={styles.orders} key={cart.id}>
                    <img src={cart.img} alt="img" />
                    <div>ID: {cart.medId}</div>
                    <div>КОЛИЧЕСТВО: {cart.count}</div>
                    <div>ЦЕНА: {cart.price}</div>
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