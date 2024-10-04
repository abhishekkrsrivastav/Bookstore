import React from 'react'

 
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from './Home/Home'
 
import Courses from './courses/Courses'
import Signup from './components/Signup'
 
import  { Toaster } from 'react-hot-toast';
import {useAuth} from './context/AuthProvider'
import { ContactUs } from './components/ContactUs'



function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
  
    <div className='dark:bg-slate-900 dark:text-white'> 
     <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/course' element={authUser ? <Courses/> :<Navigate to="/signup"/> }></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
 
    <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
  
   </Routes>
   <Toaster />
   </div>
 
 
  
    </>
  )
}

export default App