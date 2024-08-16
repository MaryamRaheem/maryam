import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../components/HomePage';
import Register from '../../components/Register';
import RoleSelect from '../../components/RoleSelect';
import { Login } from '@mui/icons-material';
import AllChats from '../../components/AllChats';
import PasswordAuthenticate from '../../components/PasswordAuthenticate';
import PersonalChat from '../../components/PersonalChat';
import UserProfile from '../../components/UserProfile';
import ContactsPage from '../../components/ContactsPage';
import ProfileAccount from '../../components/ProfileAccount';


const AuthRoutes = () => {
alert("i am here")
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<ProfileAccount />} />
                <Route path="/RoleSelect" element={<RoleSelect />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/AllChats" element={<AllChats />} />
                <Route path="/PasswordAuthenticate" element={<PasswordAuthenticate />} />
                <Route path="/personal-chat/:name" element={<PersonalChat />} />
                <Route path="/UserProfile" element={<UserProfile />} />
                <Route path="/ContactsPage" element={<ContactsPage />} />

                {/* <Route path='/' element={< />} /> */}
            </Routes>
        </>
    )
}

export default AuthRoutes