// import React from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import login from './login';
// import App from './App';
// import allShoes from './allshoes';
// import Dashboard from './Dashboard';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       localStorage.getItem('token') ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );
//   return (
//     <Router>
//       <Route path="/" component={<login/>} />
//       \<Route path="/" element={<Home />} />
//       <PrivateRoute path="/auth/users/me" element={<allShoes/>}/>
//     </Router>
//   );
// };

// export default App;
