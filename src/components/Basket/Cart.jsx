import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.scss";
import { deleteItem, updateItemToLocalStorage } from "../../redux/features/cartSlice";

const Cart = ({ _id, totalPrice, setTotalPrice }) => {
  const [count, setCount] = React.useState(1);
  const dispatch = useDispatch();
  const medicine = useSelector((state) =>
    state.medicine.medicines.filter((med) => {
      return med._id === _id;
    }),
  );
  const cartItems = useSelector((state) => state.cart.items);
  const update = (_id, bool) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.map((prod) => {
      if (prod._id === _id) {
        console.log(medicine);
        return {
          ...prod,
          count: bool ? count + 1 : count - 1,
          price: bool ? medicine[0].price * (count + 1) : medicine[0].price * (count - 1),
        };
      } else {
        return prod;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    // dispatch(updateItemToLocalStorage({ _id, count, cartItems }))
  };

  const medicineRemove = (_id) => {
    dispatch(deleteItem(_id));
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart?.filter((prod) => {
      return prod._id !== _id;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  if (!cartItems) {
    return "Жди!!!";
  }
  console.log(medicine);
  return (
    <tr className={styles.cart}>
      <td>
        <img src={medicine[0].img} alt='img' />
      </td>
      <td>{medicine[0].medName}</td>
      <td>
        <button className={styles.minus} onClick={() => update(_id, false)}>
          <button
            className={styles.btn_count}
            disabled={count === 1}
            onClick={() => setCount(count - 1)}>
            -
          </button>
        </button>
        <b className={styles.amount}>{count}</b>
        <button className={styles.plus} onClick={() => update(_id, true)}>
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
        <button className='btn btn-danger' onClick={() => medicineRemove(_id)}>
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default Cart;
