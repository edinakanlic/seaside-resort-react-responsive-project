import React from 'react';
import './App.css';
// pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/rooms/:slug' element={<SingleRoom />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
