import logo from './logo.svg';
import './App.css';
import Login from './login/Login';
import { Button } from '@mui/material';
import { useState } from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// import User from './module/User';
import { ProtectRoute } from './middleware/auth';
import User from "./module/User/User"
import PageNotFound from './module/PageNotFound/PageNotFound';
function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/user',
      element: <ProtectRoute><User /></ProtectRoute>
    },

    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    },
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
