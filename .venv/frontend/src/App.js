import React, {useState, useEffect, use} from 'react';
import api from './api';
import Navbar from './navbar';
import Login from './login';
import Routesp from './Routesp';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


const App = () => {
  const [users, setUsers] = useState([]);
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

// const handleInputChange=(event) => {
//   const username=event.target.value;
//   const password=event.target.value
//   setFormData({username, password});
// };

// const handleFormSubmit = async (event) => {
//   event.preventDefault();
//   await api.post('/users', formData);
//   fetchUsers();
//   setFormData({username: '', password: ''});
// }
function users_list(){
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>id ={user.id} username={user.username}password ={user.hashed_password}</li>
        ))}
      </ul>
    </div>
  );
}


return (
       
  <div>
    <Navbar/>
    <Login/>
      <div className='container-fluid'>
        {users_list()}
        <a className='navbar-brand' href='#'>tesststt  </a>
      </div>
    
      </div>
    


)



};

export default App;

