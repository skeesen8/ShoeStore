import React from 'react';
import axios from 'axios';
import { useNavigate,Navigate,Outlet } from 'react-router-dom';

import {useState} from 'react';
import ProtectedRoute from './Protectedroute';


const Login = ({set_is_authenticated,is_authenticated}) => {
  const navigate = useNavigate();
  const[username, set_username] = useState('');
  const[password, set_password] = useState('');
  const[email, set_email] = useState('')
  const[new_account,set_new_account]=useState('')
  const newUser = ()=>{
    navigate('/newuser')
    console.log("success")
    set_new_account = (true)

  }
  const toggleAccount = () => {
    set_new_account(!new_account);
  };
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
      set_is_authenticated(true);
      navigate('/auth/users/me');
      console.log(response.access_token)
      // return is_authenticated ? <Outlet /> : <Navigate to="/home"/>;
      
    }
  }  

  const handleCreateUser = async(e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:8000/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, username })
    }
  );

    if(response.ok){
      set_email('');
      set_password('');
      set_username('');
      toggleAccount()
    }

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error response from server:', errorResponse);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('User created:', data);
    // Handle success (e.g., notify the user, redirect, etc.)
  // } catch (error) {
  //   console.error('There was a problem with the fetch operation:', error);
  //   // Notify the user about the error
  // }
  }
// const handleCreateUser = async(e) => {
//   e.preventDefault(); 
//   const response = await fetch('http://localhost:8000/auth/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams({
//       username: username,
//       email: email,
//       password: password
//     })
//     });
//     console.log(email,password,username)

//     if(!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log('User created:', data);

// }






;
return (
  <div>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        {new_account ? (
          <>
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleCreateUser}>
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
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => set_email(e.target.value)}
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
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
              <button type="submit" className="btn btn-primary w-100">
                Create Account
              </button>
              <button onClick={toggleAccount} type="button" className="btn btn-secondary w-100 mt-2">
                Go to Login
              </button>
            </form>
          </>
        ) : (
          <>
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
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <button onClick={toggleAccount} type="button" className="btn btn-secondary w-100 mt-2">
                Create Account
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  </div>
)
}

export default Login;