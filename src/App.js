import { Routes, Route } from 'react-router-dom'

// import Header from './components/Header/Header'
import { Registrate } from './pages/Registrate/Registrate'
import { Login } from './pages/Login/Login'
import { HomePage } from './pages/HomePage/HomePage'
import { PersonalArea } from './pages/PersonalArea/PersonalArea'

function App() {
 
  return (
    <>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:id' element={<PersonalArea />} />
      <Route path='/registrate' element={<Registrate />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
