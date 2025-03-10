
import React from 'react';
import api from './api';
import {createBrowserRouter,RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import Allusers from './Allusers';
import Login from './login';
import {useState,useEffect} from 'react';
import Home from './Homescreen';
import ProtectedRoute from './Protectedroute';
import Logout from './Logout';



const App = () => {
  const [users, setUsers] = useState([]);
  const [is_authenticated, set_is_authenticated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });


const fetchUsers = async () => {
  try {
      const response = await api.get('/auth/users/all');
      setUsers(response.data); 
  } catch (error) {
      console.error('Error fetching users:', error);
  }
};



useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    set_is_authenticated(true);
  }
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
        </Routes>
      </Router>
)

};
    

export default App;

