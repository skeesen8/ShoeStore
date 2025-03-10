import React from 'react';  
import { useAuth } from './AuthContext';

const Dashboard = () => {
   const{authUser,
        setAuthUser,
        isLoggedin,
        setIsLoggedin} = useAuth();

    const login = (e) => {
        e.preventDefault();
        setIsLoggedin(true);
        setAuthUser({
            name:'John Doe',
        })
    }
    const logout = (e) => {
        e.preventDefault();
        setIsLoggedin(false);
        setAuthUser({
            name:null,
        })
    }



   
    return(
    <>
        <span>user is currently: {isLoggedin ? 'logged in' : 'logged out'}.</span>
        {isLoggedin ? (<span>User name: {authUser.name}</span>):null}
        <br/>
        {isLoggedin 
        ? <button onClick={(e)=>{login(e)}}>login</button>
        : <button onClick={(e)=>{logout(e)}}>logout</button>}
    </>
    )
}

export default Dashboard