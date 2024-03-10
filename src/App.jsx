import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './home/Home'
import { SignUp } from './login/SignUp'
import { Cita } from './home/Cita'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route  path='/signup' element={<SignUp/>} />
      <Route  path='/cita' element={<Cita/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
