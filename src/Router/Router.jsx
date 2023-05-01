import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Signin from '../components/Signin'
import Signup from "../components/Signup";
import Account from "../components/Account";
import { AuthContextProvider } from "../context/AuthContext";
import Home from '../components/screns/Home/Home'
import SecondPage from '../components/SecondPage';
import AllHotels from '../components/screns/Home/allHotels/AllHotels';
const Router = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup/>  }/>
          <Route path='/' element={<Home/>} />
          <Route path='/account' element={<Account />} />
          <Route path='/all-hotel' element={<AllHotels />} />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default Router
