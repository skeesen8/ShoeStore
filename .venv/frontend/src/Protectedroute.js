import {
    Route,
    Navigate,
    Outlet
} from 'react-router-dom';
// import is_authenticated from './login';
import {useState} from 'react';
import Home from './Homescreen';
import App from './App';


// function ProtectedRoute(is_authenticated) {
//     console.log(is_authenticated);
//     // const is_authenticated = false;



// return is_authenticated ? <Outlet /> : <Navigate to="/users"/>;
// }

const ProtectedRoute = (is_authenticated) => {
console.log(is_authenticated);  
return is_authenticated ? <Outlet is_authenticated={is_authenticated}/> : <Navigate to="/users"/>;
}



export default ProtectedRoute;


 