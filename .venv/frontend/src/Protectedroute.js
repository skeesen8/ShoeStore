import {
    Route,
    Navigate,
    Outlet
} from 'react-router-dom';


const ProtectedRoute = (is_authenticated) => {
console.log(is_authenticated);  
return is_authenticated ? <Outlet is_authenticated={is_authenticated}/> : <Navigate to="/users"/>;
}



export default ProtectedRoute;


 