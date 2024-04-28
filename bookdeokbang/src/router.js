import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { AuthProvider } from '.AuthContext';
import RouteChangeTracker from './RouteChangeTracker'
import Login from "./pages/common/LoginPage";
import MainPage from "./pages/user/MainPage";
import Similar from "./pages/user/Similar";
import StudyNote from "./pages/user/StudyNote";
import Search from "./pages/user/Search";
import Analyze from "./pages/user/Analyze";

const Router = () => {

    return (
        <BrowserRouter>
            <RouteChangeTracker />
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="/similar" element={<Similar/>}/>
                <Route path="/studynote" element={<StudyNote/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/analyze" element={<Analyze/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;