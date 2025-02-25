import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
