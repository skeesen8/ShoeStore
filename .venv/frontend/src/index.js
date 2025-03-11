import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter,RouterProvider } from 'react-router-dom';
import {createBrowserRouter,RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import Allusers from './Allusers';
import Login from './login';
import App from './App';
import Home from './Homescreen';
import ProtectedRoute from './Protectedroute';
import reportWebVitals from './reportWebVitals';
import { all } from 'axios';
import { useState } from 'react'
import Logout from './Logout';
import Navbar from './navbar';
// const router=createBrowserRouter(routes)







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar  />
  <App />
  </>
  
  
)
