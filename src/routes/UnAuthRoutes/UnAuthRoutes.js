import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import RoleSelect from '../../components/RoleSelect';
import HomePage from '../../components/HomePage'
import PasswordAuthenticate from '../../components/PasswordAuthenticate';
import Login from '../../components/Login';
import ProfileAccount from '../../components/ProfileAccount';
import Register from '../../components/Register';
import PersonalChat from '../../components/PersonalChat';
import UserProfile from '../../components/UserProfile';
import ContactsPage from '../../components/ContactsPage';
import AllChats from '../../components/AllChats';



const UnAuthRoutes = () => {


    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/profile" element={<ProfileAccount />} />
                <Route path="/RoleSelect" element={<RoleSelect />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/PasswordAuthenticate" element={<PasswordAuthenticate />} />
                <Route path="/AllChats" element={<AllChats />} />
                <Route path="/personal-chat/:name" element={<PersonalChat />} />
                <Route path="/UserProfile" element={<UserProfile />} />
                <Route path="/ContactsPage" element={<ContactsPage />} />
            </Routes>
        </>
    )
}

export default UnAuthRoutes