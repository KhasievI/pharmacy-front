import React from "react";
import { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./Basket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth } from "../../redux/features/pharmacySlice";
import Cart from "./Cart";
import { fetchCart } from "../../redux/features/cartSlice";

const Index = () => {
  const [opened, setOpened] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const localStorageItems = JSON.parse(localStorage.getItem("items"));

  const handleSendCart = () => {
    dispatch(fetchCart(cartItems));
    setOpened(false);
    alert("ok");
  };
  if (!cartItems) {
    return "Жди!!";
  }
  if (!isAuth) {
    return (
      <div className={styles.container}>
        {!opened ? (
          <div className={styles.cartButton} onClick={() => setOpened(true)}>
            <img src={bagIcon} alt='img' />
            {cartItems.length ? <span>{cartItems?.length}</span> : ""}
          </div>
        ) : (
          ""
        )}
        {opened &&
          (cartItems.length === 0 ? (
            <div>
              <div
                className={styles.cartButton}
                style={{ textAlign: "end" }}
                onClick={() => setOpened(false)}>
                <img src='./exit.png' style={{ width: "40%" }} alt='img' />
              </div>
            </div>
          ) : (
            <>
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
              <button onClick={handleSendCart} className={styles.total}>
                Оформить доставку
              </button>
            </>
          ))}
      </div>
    );
  }
};

export default Index;
