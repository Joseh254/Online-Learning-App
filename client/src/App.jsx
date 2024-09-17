import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './PAGES/HOME/Home';
import Footer from '../COMPONENTS/FOOTER/Footer';
import Header from '../COMPONENTS/HEADER/Header';
import TeachWiithUs from './PAGES/TEACHWITHUS/TeachWiithUs';
import Enrollment from './PAGES/ENROLLMENT/Enrollment';
import Login from "./PAGES/LOGIN/Login"
import Signup from "./PAGES/SIGNUP/Signup"
import './App.css';

function App() {

  return (
    <BrowserRouter>
  <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Enrollment' element={<Enrollment/>}/>
     <Route path='/TeachWiithUs' element={<TeachWiithUs/>}/>
     <Route path='/Signup' element={<Signup/>}/>
     <Route path='/Login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
