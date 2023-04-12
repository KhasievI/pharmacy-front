import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";
import { checkIsAuth } from "../../redux/features/pharmacySlice";
import UserModal from "../UserModal/UserModal.jsx";
import Basket from "../Basket/Basket";
import { getCart } from "../../redux/features/cartSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [userModal, setUserModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const navigate = useNavigate();
  const isAuth = useSelector(checkIsAuth);
  const inputRef = React.useRef();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts)

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    if (isAuth) {
      dispatch(getCart());
    }
  }, []);

  const handleClick = () => {
    setUserModal(true);
  };
  const handleClear = () => {
    setSearch("");
    inputRef.current.focus();
  };

  const handleOrder = () => {
    setOrderModal(!orderModal);
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.searchChild}>
        <div className={styles.logo}>
          <img src='logo.png' alt='' />
        </div>
        <div className={styles.searchBar}>
          <input
            ref={inputRef}
            type='text'
            className={styles.searchInp}
            value={search}
            onChange={handleSearchChange}
          />
          {search && (
            <svg
              onClick={handleClear}
              className={styles.btnClear}
              fill='#000000'
              width='25px'
              height='25px'
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z' />
            </svg>
          )}
          {/* <button className={styles.searchBtn}>Найти</button> */}
        </div>
      </div>
      <Basket />
      {!isAuth ? (
        <div className={styles.favorite}>
          <div className={styles.favLogo}>
            <img src='favLogo.png' alt='' />
          </div>
          Избранное
        </div>
      ) : (
        <button onClick={() => navigate("/order")} className={styles.order}>
          Заказ
          {carts?.length ? <span>{carts?.length}</span> : ""}
        </button>
      )}
      {isAuth ? (
        <>
          <div className={styles.profLogo}>
            <img onClick={handleClick} src='profileLogo.png' alt='' />
          </div>
          {userModal ? <UserModal userModal={userModal} setUserModal={setUserModal} /> : null}
        </>
      ) : (
        <div onClick={() => navigate("/login")} className={styles.logIn}>
          <div className={styles.logInIcon}>
            <img src='logIn.png' alt='logIn' />
          </div>
          Войти
        </div>
      )}
    </div>
  );
};

export default SearchBar;
