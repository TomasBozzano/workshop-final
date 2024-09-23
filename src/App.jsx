import { Route, Routes } from 'react-router-dom'
import {Home, LandingPage, Login, Register} from './pages'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}  />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
