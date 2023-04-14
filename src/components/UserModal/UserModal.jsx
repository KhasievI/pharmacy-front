import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import styles from "./userModal.module.scss";
import { getPharmacies, logout } from '../../redux/features/pharmacySlice'
import { toast } from 'react-toastify'

const UserModal = ({ userModal, setUserModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pharmacy = useSelector((state) => state.pharmacy.pharmacy)


  const handleExit = () => {
    dispatch(logout())
    dispatch(getPharmacies())
    window.localStorage.removeItem('token')
    toast('Вы вышли из системы')
    navigate("/login")
    setUserModal(false);
  }

  const myProfile = () => {
    setUserModal(false)
    navigate("/me")
  }

  return (
    <div className={styles.userModal}>
      <div className={styles.pharmacyName}>{pharmacy.pharmacyName}</div>
      <hr className={styles.line}/>
      <div className={styles.profile} onClick={myProfile}>Профиль</div>
      <div className={styles.logout} onClick={handleExit}>Выйти</div>
    </div>
  );
};

export default UserModal;
