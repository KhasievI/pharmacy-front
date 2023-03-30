import { Routes, Route } from 'react-router-dom'

import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'
import { HomePage } from './pages/HomePage/HomePage'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
