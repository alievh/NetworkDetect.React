import React from 'react';
import { Navigate, Outlet } from "react-router-dom"

const useAuth = () => {
    const user = { loggedIn: false};
    if(localStorage.getItem("user") === null) {
        user.loggedIn = false;
    }else {
        user.loggedIn = true;
    }
    return user && user.loggedIn;
}

const PrivateRoute = () => {
    const isAuth : any = useAuth();

    if (!isAuth) {
        return <Navigate to="/account" />;
      }
    
      return <Outlet />;
}

export default PrivateRoute