import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter,RouterProvider } from 'react-router-dom';
import {createBrowserRouter,RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import Allusers from './Allusers';
import Login from './login';
import App from './App';
import Routesp from './Routesp';



import reportWebVitals from './reportWebVitals';
import { all } from 'axios';
// const router=createBrowserRouter(routes)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/auth/users/me" element={<Allusers />} /> {/* Define the route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>

)

