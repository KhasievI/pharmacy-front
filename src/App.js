import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getPharmacy } from "./redux/features/pharmacySlice";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Chatbot from "./components/Bot/Chatbot";
import styles from './app.scss'

import { Registrate } from './pages/Registrate/Registrate'
import { Login } from './pages/Login/Login'
import { HomePage } from './pages/HomePage/HomePage'
import { PersonalArea } from './pages/PersonalArea/PersonalArea'
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Category } from './pages/Category/Category';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import Menu from "./components/Menu/Menu";
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPharmacy());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Header/>
      <SearchBar/>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/me" element={<PersonalArea />} />
        <Route path="/registrate" element={<Registrate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/us" element={<AboutUs />} />
        <Route path="/cat" element={<Category />} />
      </Routes>
       <Chatbot className={styles.bot}/>
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  )
}

export default App;
