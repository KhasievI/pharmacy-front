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
  };

  if (!cartItems) {
    return "Жди!!!";
  }

  return (
    <tr className={styles.cart}>
      <td>
        <img src={medicine[0].img} alt='img' />
      </td>
      <td>{medicine[0].medName}</td>
      <td>
        <button className={styles.minus} onClick={() => update(_id, false)}>
          <span disabled={count === 1} onClick={() => setCount(count - 1)}>
            -
          </span>
        </button>
        <b className={styles.amount}>{count}</b>
        <button className={styles.plus} onClick={() => update(_id, true)}>
          <span onClick={() => setCount(count + 1)}>+</span>
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
