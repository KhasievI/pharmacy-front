import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getPharmacies, getPharmacy } from "./redux/features/pharmacySlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chatbot from "./components/Bot/Chatbot";
import styles from "./app.scss";

import { Registrate } from "./pages/Registrate/Registrate";
import { Login } from "./pages/Login/Login";
import { HomePage } from "./pages/HomePage/HomePage";
import { PersonalArea } from "./pages/PersonalArea/PersonalArea";
import { Order } from "./pages/Order/Order";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import SearchBar from "./components/SearchBar/SearchBar";
import ListPage from "./pages/ListPage/ListPage";
import MapHeader from "./components/MapHeader/MapHeader";
import { getCart } from "./redux/features/cartSlice";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import YMap from "./components/Map/YMap.jsx";
import { PharmacyPage } from './pages/PharmacyPage/PharmacyPage';
import { PharmItemPage } from './pages/PharmItemPage/PharmItemPage';
import { MedItem } from './pages/MedItem/MedItem';
import { fetchMedicines } from './redux/features/medicineSlice';

function App() {
  const [map, setMap] = useState(false)
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPharmacy());
    dispatch(fetchMedicines())
    dispatch(getPharmacies())
  }, [dispatch])

  return (
    <div className={styles.App}>
      {map ? <YMap setMap={setMap} /> : null}
      <MapHeader setMap={setMap} />
      <SearchBar setSearch={setSearch} search={search} />
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pharm/:id' element={<PharmItemPage />} />
        <Route path='/order' element={<Order />} />
        <Route path='/list' element={<ListPage setSearch={setSearch} search={search} />} />
        <Route path='/list/med/:id' element={<MedItem />} />
        <Route path='/items' element={<PharmacyPage />} />
        <Route path='/me' element={<PersonalArea />} />
        <Route path='/registrate' element={<Registrate />} />
        <Route path='/login' element={<Login />} />
        <Route path='/us' element={<AboutUs />} />
        <Route path='/favoriteItems' element={<FavoritePage />} />
      </Routes>
      <Chatbot className={styles.bot} />
      <Footer />
      <ToastContainer position='bottom-left' />
    </div>
  );
}

export default App;
