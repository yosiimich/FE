import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import { AuthProvider } from '.AuthContext';
import RouteChangeTracker from './RouteChangeTracker'
import Login from "./pages/common/LoginPage";
const Router = () => {

    return (
        <BrowserRouter>
            <RouteChangeTracker />
            <Route path="/" element={<Login/>}/>
        </BrowserRouter>
    );
};

export default Router;