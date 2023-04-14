import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { checkIsAuth } from "../../redux/features/pharmacySlice";
import { toast } from 'react-toastify'
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./Basket.module.scss";
import Cart from "./Cart";
import { fetchCart } from "../../redux/features/cartSlice";
import { fetchMedicines } from "../../redux/features/medicineSlice";

const Basket = () => {
  const [modal, setModal] = useState(false);
  const [opened, setOpened] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.cart.status);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  const handleModalOrder = () => {
    setModal(
      <div className={styles.checkoutModal}>
        <div className={styles.closeMadal} onClick={() => setModal(false)}>
          <div onClick={() => setOpened(true)}><img src="cancel.png" alt="cancel"/></div>
        </div>
        <h2>Оформление заказа</h2>
        <hr />
        <div className={styles.block}>
          <div className={styles.inputBlock}>
            <form className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name", { required: true })} type='text' placeholder='Имя' />
              {errors.name && <span>This field is required</span>}
              <input {...register("phone", { required: true })} type='text' placeholder='Телефон' />
              {errors.phone && <span>This field is required</span>}
              <input {...register("city", { required: true })} type='text' placeholder='Населенный пункт' />
              {errors.city && <span>This field is required</span>}
              <input {...register("street", { required: true })} type='text' placeholder='Улица' />
              {errors.street && <span>This field is required</span>}
              <input {...register("houseNumber", { required: true })} type='text' placeholder='Дом / Квартира' />
              {errors.houseNumber && <span>This field is required</span>}
              <textarea {...register("comment")} type='text' placeholder='Комментарии' className={styles.commentInput}></textarea>
              <input type='submit' value='Отправить' className={styles.send} />
            </form>
          </div>
        </div>
      </div>
    )
  }

  const onSubmit = (data) => {
    dispatch(fetchCart({ cart: [...cartItems], customer: [{ ...data }] }))
    setModal(false);
    setOpened(false);
    reset();
    toast(status);
    localStorage.clear();
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
            <>
              <div className={styles.wrapperCart}>
                <div
                  className={styles.cartButton}
                  style={{ textAlign: "end" }}
                  onClick={() => setOpened(false)}>
                  <img src='./exit.png' style={{ width: "40%" }} alt='img' />
                </div>
                <table className={styles.table}>
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

              </div>
              <div onClick={handleModalOrder} className={styles.checkout}>
                <button onClick={() => setOpened(false)} >Оформить доставку</button>
              </div>
            </>
          ))}
      </div>
    );
  }
};

export default Basket;
