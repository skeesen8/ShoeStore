import React from 'react';

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; 
  }

  const handleClick = () => {
    handleLogout();
  };

  return (
    <button class="logout-button" onClick={handleClick}>Logout</button>
  );
}

export default Logout