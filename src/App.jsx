import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/sign-in/Login';
// import Register from './pages/sign-up/Register';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import Dashboard from './pages/dashboard/Dashboard';
import './App.scss';
import 'primeicons/primeicons.css';
import Header from './comps/header/Header';
import Navbar from './comps/navigation/Navbar';
        

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Login/>} /> */}
      {/* <Route path='/signup' element={<Register/>} /> */}
      {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
      <Route path='/' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
