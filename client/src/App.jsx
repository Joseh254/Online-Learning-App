import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './PAGES/HOME/Home';
import Footer from '../COMPONENTS/FOOTER/Footer'
import Header from '../COMPONENTS/HEADER/Header';

import './App.css';

function App() {



  return (
    <BrowserRouter>
  <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
