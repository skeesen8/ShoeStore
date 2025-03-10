
import React from 'react';
import api from './api';
import LoginForm from './LoginForm';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './AuthContext';
import Dashboard from './Dashboard';
// import { BrowserRouter,RouterProvider } from 'react-router-dom';
import {createBrowserRouter,RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import Allusers from './Allusers';
import Login from './login';
import {useState,useEffect} from 'react';
// import App from './App';
import Routesp from './Routesp';
import Home from './Homescreen';
import ProtectedRoute from './Protectedroute';


const App = () => {
  const [users, setUsers] = useState([]);
  const [is_authenticated, set_is_authenticated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

//   const fetchUsers = async () => {
//     const response = await api.get('/auth/users/all')
//     (response => console.log(response))
//     setUsers(response.data)
//     console.log(response)
// };

const fetchUsers = async () => {
  try {
      const response = await api.get('/auth/users/all');
      setUsers(response.data); // Correctly assign the data
  } catch (error) {
      console.error('Error fetching users:', error);
  }
};


useEffect(() => {
  fetchUsers();
}, []);



if (!is_authenticated) {
  return (
    <Router>
    
      <Login set_is_authenticated={set_is_authenticated} />
  
    </Router>
  )
}
  return(
    
    <Router>
        <Routes>
          <Route path="/" element={<Login set_is_authenticated={set_is_authenticated} is_authenticated={is_authenticated} />} />
          <Route element={<ProtectedRoute is_authenticated={is_authenticated}/>}>
                      <Route path="/home" element={<Home />} />
                      <Route path="/auth/users/me" element={<Allusers />} />
          </Route>
          {/* <Route path="/home" element={<Home />} />
          <Route path="/auth/users/me" element={<Allusers />} /> Define the route */}
          {/* Add more routes as needed */}
        </Routes>
      </Router>
  // <Login /> 
)


//   // </AuthProvider>
// )
};
    

export default App;

