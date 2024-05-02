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
import MyPage from "./pages/user/MyPage"; 
import Profile from "./pages/user/Profile";
import Withdraw from "./pages/user/Withdraw";
import Inquiry from "./pages/user/Inquiry";
import Question from "./pages/user/Question";
import Info from "./pages/user/Info";
import Terms from "./pages/user/Termsofuse";
import Policy from "./pages/user/Policy";
import PersonalData from "./pages/user/PersonalData";


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
                <Route path="/mypage" element={<MyPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/withdraw" element={<Withdraw/>}/>
                <Route path="/inquiry" element={<Inquiry/>}/>
                <Route path="/question" element={<Question/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/terms" element={<Terms/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="/personaldata" element={<PersonalData/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;