import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter,RouterProvider } from 'react-router-dom';
import {createBrowserRouter,RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import Allusers from './Allusers';
import Login from './login';
import App from './App';
import Routesp from './Routesp';
import Home from './Homescreen';
import ProtectedRoute from './Protectedroute';
import LoginForm from './LoginForm';
import { AuthProvider } from './AuthContext'; 
import { useAuth } from './AuthContext';
import reportWebVitals from './reportWebVitals';
import { all } from 'axios';
import Dashboard from './Dashboard';
import { useState } from 'react'
// const router=createBrowserRouter(routes)







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  
  
  // <Router>
  //     <Routes>
  //       <Route path="/" element={<Login set_is_authenticated={set_is_authenticated} is_authenticated={is_authenticated} />} />
  //       <Route element={<ProtectedRoute is_authenticated={is_authenticated}/>}>
  //                   <Route path="/home" element={<Home />} />
  //                   <Route path="/auth/users/me" element={<Allusers />} />
  //       </Route>
  //       {/* <Route path="/home" element={<Home />} />
  //       <Route path="/auth/users/me" element={<Allusers />} /> Define the route */}
  //       {/* Add more routes as needed */}
  //     </Routes>
  //   </Router>
  
  
)
// const App = () => {
//   const [is_authenticated, set_is_authenticated] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login set_is_authenticated={set_is_authenticated} />} />
//         <Route element={<ProtectedRoute is_authenticated={is_authenticated} />}>
//           <Route path="/home" element={<Home />} />
//           <Route path="/auth/users/me" element={<Allusers />} />
//         </Route>
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;