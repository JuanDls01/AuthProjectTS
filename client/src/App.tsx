import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionsCreators from './redux/actions';
import { useCookies } from 'react-cookie';

// import logo from './logo.svg';
import './App.css';

// Components:
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Seller from './components/Seller/Seller';
import Admin from './components/SuperAdmin/Admin';


const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { loginToken } = actionsCreators;
  const [cookies, setCookies, removeCookie] = useCookies(['token']);

  useEffect(() => {
    if (cookies.token) dispatch(loginToken({ bodyToken: cookies.token}))
  })

  return (
    <div>
      
    </div>
    // <div className="App">
    //   {/* User */}
    //   <Route index element = {<Home />}/>
    //   <Route path='/login' element = {<Login />} />
    //   <Route path='/register' element = {<Register />} />
    //   {/* Seller */}
    //   <Route path='/seller' element = {<Seller />} />
    //   {/* Super Admin */}
    //   <Route path='/admin' element = {<Admin />} />
    // </div>
  );
}

export default App;
