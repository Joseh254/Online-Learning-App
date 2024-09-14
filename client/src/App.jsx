import React from 'react';
import Home from './PAGES/HOME/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {



  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
