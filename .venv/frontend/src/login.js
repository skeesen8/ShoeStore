import React from 'react';
import { useNavigate} from 'react-router-dom';
import {useState} from 'react';


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
      navigate('/shoes');
      console.log(response.access_token)
      
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
  }





;
return (
  <div>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg modern-login-card">
        {new_account ? (
          <>
            <h2 className="text-center mb-4 login-header">Sign Up</h2>
            <form onSubmit={handleCreateUser}>
              <div className="mb-3">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => set_username(e.target.value)}
                  className="form-control modern-input"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => set_email(e.target.value)}
                  className="form-control modern-input"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => set_password(e.target.value)}
                  className="form-control modern-input"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 modern-button">
                Create Account
              </button>
              <button
                onClick={toggleAccount}
                type="button"
                className="btn btn-secondary w-100 mt-2 modern-secondary-button"
              >
                Go to Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-center mb-4 login-header">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => set_username(e.target.value)}
                  className="form-control modern-input"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => set_password(e.target.value)}
                  className="form-control modern-input"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 modern-button">
                Login
              </button>
              <button
                onClick={toggleAccount}
                type="button"
                className="btn btn-secondary w-100 mt-2 modern-secondary-button"
              >
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