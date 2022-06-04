import React from 'react';
import { Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

// Components:
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Seller from './components/Seller/Seller';
import Admin from './components/SuperAdmin/Admin';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
      {/* User */}
      <Route index element = {<Home />}/>
      <Route path='/login' element = {<Login />} />
      <Route path='/register' element = {<Register />} />
      {/* Seller */}
      <Route path='/seller' element = {<Seller />} />
      {/* Super Admin */}
      <Route path='/admin' element = {<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
