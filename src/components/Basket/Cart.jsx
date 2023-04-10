import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.scss";
import { deleteItem, updateItemToLocalStorage } from "../../redux/features/cartSlice";

const Cart = ({ _id, totalPrice, setTotalPrice }) => {
  const [count, setCount] = React.useState(1)
  const dispatch = useDispatch();
  const medicine = useSelector((state) =>
    state.medicine.medicines.filter((med) => {
      return med._id === _id
    })
  )
  const cartItems = useSelector((state) => state.cart.items)

  const dec = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  };

  const inc = () => {
    if (count > 0) {
      setCount(count + 1)
    }
  };
  const update = (_id) => {
    dispatch(updateItemToLocalStorage({ _id, count, cartItems }))
  }

  const medicineRemove = (_id) => {
    dispatch(deleteItem(_id))
  }

  if (!cartItems) {
    return 'Жди!!!'
  }

  return (
    <tr className={styles.cart}>
      <td>
        <img src={medicine[0].img} alt="img" />
      </td>
      <td>
        {medicine[0].medName}
      </td>
      <td>
        <button className={styles.minus} onClick={() => update(_id)} ><span onClick={dec}>-</span></button>
        <b className={styles.amount}>{count}</b>
        <button className={styles.plus} onClick={() => update(_id)} ><span onClick={inc}>+</span></button>
      </td>
      <td>
        {medicine[0].price * count}
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => medicineRemove(_id)}>Удалить</button>
      </td>
    </tr>
  );
};

export default Cart;