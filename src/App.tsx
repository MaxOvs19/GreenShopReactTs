import React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';

import HomePage from './pages/Home/components/HomePage/HomePage';
import './index.scss';
import Basket from './pages/Basket/components/Basket/Basket';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
