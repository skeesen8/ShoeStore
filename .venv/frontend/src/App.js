
import React from 'react';
import api from './api';
import {createBrowserRouter,RouterProvider, BrowserRouter as Router, Routes, Route,useParams } from "react-router-dom"
import './index.css';
import './ShoeCard.css';
import Login from './login';
import {useState,useEffect} from 'react';
import Home from './Homescreen';
import ProtectedRoute from './Protectedroute';
import Fetch_shoes from './Shoes';
import ShoeById from './ShoeById';
import CreateShoe from './CreateShoe';




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


else
  return(
    
    <Router>
        

        <Routes>
          <Route path="/" element={<Login set_is_authenticated={set_is_authenticated} is_authenticated={is_authenticated} />} />
          <Route element={<ProtectedRoute is_authenticated={is_authenticated}/>}>
                      <Route path="/home" element={<Home />} />
                      <Route path="/sell" element={<CreateShoe/>}/>
                      <Route path="/shoes" element={<Fetch_shoes />}/> 
                      <Route path="/shoes/:id" element={<ShoeById/>}/>
          </Route>
        </Routes>
      </Router>
)

};
    

export default App;

