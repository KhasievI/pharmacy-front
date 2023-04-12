import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.scss";
import { addItemToCard, deleteItem, updateItemToLocalStorage } from "../../redux/features/cartSlice";
import { fetchMedicines } from "../../redux/features/medicineSlice";


const Cart = ({ medId, img, totalPrice, setTotalPrice }) => {
  const dispatch = useDispatch();
  const medicine = useSelector((state) =>
    state.medicine.medicines.filter((med) => {
      return med._id === medId;
    }),
  );

  React.useEffect(() => {
    dispatch(fetchMedicines())
  }, [])

  const cartItem = useSelector((state) => state.cart.items.find(prod => prod.medId === medId))
  const [count, setCount] = React.useState(cartItem ? cartItem.count : 1);
  
  const update = (medId, bool) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.map((prod) => {
      if (prod.medId === medId) {
        return {
          ...prod,
          count: bool ? count + 1 : count - 1,
          price: bool ? medicine[0].price * (count + 1) : medicine[0].price * (count - 1),
        };
      } else {
        return prod;
      }
    });
    dispatch(addItemToCard(newCart));
    localStorage.setItem("cart", JSON.stringify(newCart));
    // dispatch(updateItemToLocalStorage({ medId, count, cartItems }))
  };

  const medicineRemove = (medId) => {
    dispatch(deleteItem(medId));
    const cart = JSON.parse(localStorage.getItem("cart"))
    const newCart = cart?.filter((prod) => {
      return prod.medId !== medId;
    });
    localStorage.setItem("cart", JSON.stringify(newCart))
  };

  return (
    <tr className={styles.cart}>
      <td>
        <img src={img} alt='img' />
      </td>
      <td>{medicine[0].medName}</td>
      <td>
        <button className={styles.minus} onClick={() => update(medId, false)}>
          <button
            className={styles.btn_count}
            disabled={count === 1}
            onClick={() => setCount(count - 1)}>
            -
          </button>
        </button>
        <b className={styles.amount}>{count}</b>
        <button className={styles.plus} onClick={() => update(medId, true)}>
          <button
            className={styles.btn_count}
            disabled={count === medicine[0].countInStock}
            onClick={() => setCount(count + 1)}>
            +
          </button>
        </button>
      </td>
      <td>{medicine[0].price * count}</td>
      <td>
        <button className={styles.btn} onClick={() => medicineRemove(medId)}>
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default Cart;
