import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.scss";

const Cart = ({ id, productId, amount, num }) => {
  const [count, setCount] = React.useState(1);
  const product = useSelector((state) =>
    state.products.find((product) => {
      return product.id === productId
    })
  )

  const dispatch = useDispatch();

  const dec = () => {
    if (amount > 1) {
      setCount(count - 1);
    }
  };

  const inc = () => {
    if (product.left > 0) {
      setCount(count + 1);
    }
  };

  // const productRemove = () => {
  //   dispatch(deleteItem({ id, productId, amount }))
  // }

  let sum = <b>{product.discount ? (product.price - (product.price / 100 * product.discount)) * amount : product.price * amount} ₽</b>

  return (
    <tr>
      <td>{num}</td>
      <td>
        <img src='{product.image}' alt="img" />
      </td>
      <td>
        {product.name}
      </td>
      <td>'{product.left}'</td>
      <td>
        <button onClick={dec} className={styles.minus}>-</button>
        <b className={styles.amount}>{amount}</b>
        <button onClick={inc} className={styles.plus}>+</button>
      </td>
      <td>
        {sum}
      </td>
      <td>
        <button class="btn btn-danger" onClick='{productRemove}'>Удалить</button>
      </td>
    </tr>
  );
};

export default Cart;