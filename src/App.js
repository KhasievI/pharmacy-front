
import Header from "./components/Header/Header";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getPharmacy } from "./redux/features/pharmacySlice";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import Header from './components/Header/Header'
import { Registrate } from './pages/Registrate/Registrate'
import { Login } from './pages/Login/Login'
import { HomePage } from './pages/HomePage/HomePage'
import { PersonalArea } from './pages/PersonalArea/PersonalArea'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPharmacy())
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/me' element={<PersonalArea />} />
        <Route path='/registrate' element={<Registrate />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer position='bottom-right' />
    </div>
  )

}

export default App
