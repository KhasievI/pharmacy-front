import React from "react";
import { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./Basket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth } from "../../redux/features/pharmacySlice";
import { toast } from 'react-toastify'
import Cart from "./Cart";
import { fetchCart } from "../../redux/features/cartSlice";
import { fetchMedicines } from "../../redux/features/medicineSlice";

const Basket = () => {
  const [modal, setModal] = React.useState('');
  const [opened, setOpened] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [city, setCity] = useState()
  const [street, setStreet] = useState()
  const [houseNumber, setHouseNumber] = useState()
  const [comment, setComment] = useState()
  const cartItems = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.cart.status);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMedicines())
  }, [])

  const handleModalOrder = () => {
    setModal(
      <div className={styles.checkoutModal}>
        <div className={styles.closeMadal} onClick={() => setModal(false)}><div onClick={() => setOpened(true)}>Закрыть</div></div>
        <h1>Оформление заказа</h1>
        <hr />
        <div className={styles.block}>
          <div className={styles.inputBlock}>
            <form className={styles.inputs}>
              <input required value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Имя' />
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} type='text' placeholder='Телефон' />
              <input required value={city} onChange={(e) => setCity(e.target.value)} type='text' placeholder='Населенный пункт' />
              <input required value={street} onChange={(e) => setStreet(e.target.value)} type='text' placeholder='Улица' />
              <input required value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} type='text' placeholder='Дом / Квартира' />
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} type='text' placeholder='Комментарии' className={styles.commentInput}></textarea>
              <input type='submit' onClick={handleSendCart} placeholder='Отправить' className={styles.send}/>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  const handleSendCart = () => {
    dispatch(fetchCart({cart: [...cartItems], customer: [{name, phone, city, street, houseNumber, comment}]}))
    setModal(false)
    setOpened(false)
    setName()
    setPhone()
    setPhone()
    setCity()
    setStreet()
    setHouseNumber()
    setComment()
    toast(status)
    localStorage.clear()
  }

  if (!isAuth) {
    return (
      <div className={styles.container}>
        {modal}
        {!opened && !modal ? (
          <div className={styles.cartButton} onClick={() => setOpened(true)}>
            <img src={bagIcon} alt='img' />
            {cartItems?.length ? <span>{cartItems?.length}</span> : ""}
          </div>
        ) : (
          ""
        )}
        {(opened && !modal) &&
          (cartItems?.length === 0 ? (
            <div>
              <div
                className={styles.cartButton}
                style={{ textAlign: "end" }}
                onClick={() => setOpened(false)}>
                <img src='./exit.png' style={{ width: "40%" }} alt='img' />
              </div>
            </div>
          ) : (
            <div className={styles.wrapperCart}>
              <div
                className={styles.cartButton}
                style={{ textAlign: "end" }}
                onClick={() => setOpened(false)}>
                <img src='./exit.png' style={{ width: "40%" }} alt='img' />
              </div>
              <table>
                <thead>
                  <tr>
                    <td></td>
                    <td>
                      <h4>Название</h4>
                    </td>
                    <td>
                      <h4>Количество</h4>
                    </td>
                    <td>
                      <h4>Сумма</h4>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(cartItems) &&
                    cartItems?.map((cartItem) => {
                      return (
                        <Cart totalPrice={totalPrice} setTotalPrice={setTotalPrice} {...cartItem} />
                      );
                    })}
                </tbody>
              </table>
              <div onClick={handleModalOrder} className={styles.checkout}>
                <button onClick={() => setOpened(false)} >Оформить доставку</button>
              </div>
            </div>
          ))}
      </div>
    );
  }
};

export default Basket;
