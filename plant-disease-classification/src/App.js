import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PotatoImageUpload } from './components/pages/Potato';
import { TomatoImageUpload } from './components/pages/Tomato';
import { BellPepperImageUpload } from './components/pages/BellPepper';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/potato' element={<PotatoImageUpload />} />
          <Route path='/tomato' element={<TomatoImageUpload />} />
          <Route path='/bell-pepper' element={<BellPepperImageUpload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



