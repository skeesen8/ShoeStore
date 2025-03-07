import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import Navbar from './navbar';
import Routesp from './Routesp';

const Login = () => {
  const navigate = useNavigate();
  const[username, set_username] = useState('');
  const[password, set_password] = useState('');
  // const history = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(username, password);
    const response = await fetch('http://localhost:8000/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: username,
        password: password,
      }),
    })
    .then(response => response.json())
    console.log(response);
    if (response.access_token) {
      localStorage.setItem('token', response.access_token);
      navigate('/auth/users/me');
    }
  }
  
  




  //   try {
  //     const response = await axios.post('http://localhost:8000/auth/token', {
  //       username: username,
  //       password: password
  //     });
  //     console.log(response.data);
     
  //     console.log(response.data); 
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }
  // };

 
  return (
    <div> 
      <Navbar /> 
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => set_username(e.target.value)}
              className="form-control"
              id="username"
              placeholder="Enter your username"
              required
              />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => set_password(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              />
          </div>
           <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        {/* <h3>User is {is_authenticated ? "Logged in" : "Not logged in"}</h3> */}
        {/* {is_authenticated &&(
        <pre style={{textAlign:"start"}}>{JSON.stringify(user,null,2)} </pre>)} */}
      </div>
    </div>
    </div>
  );
};


export default Login;