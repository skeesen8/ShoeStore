import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile'; // Import the UserProfile component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/users/me" element={<UserProfile />} /> {/* Define the route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
