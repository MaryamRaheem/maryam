import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RoleSelect from "../../components/RoleSelect";
import HomePage from "../../components/HomePage";
import PasswordAuthenticate from "../../components/PasswordAuthenticate";
import Login from "../../components/Login";
import ProfileAccount from "../../components/ProfileAccount";
import Register from "../../components/Register";
import PersonalChat from "../../components/PersonalChat";
import UserProfile from "../../components/UserProfile";
import ContactsPage from "../../components/ContactsPage";
import AllChats from "../../components/AllChats";

const UnAuthRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      {/* Unrestricted Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/RoleSelect" element={<RoleSelect />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ProfileAccount" element={<ProfileAccount />} />
      <Route path="/PasswordAuthenticate" element={<PasswordAuthenticate />} />

      {/* Restricted Routes */}
      <Route
        path="/AllChats"
        element={isAuthenticated ? <AllChats /> : <Navigate to="/Login" />}
      />
      <Route
        path="/personal-chat/:name"
        element={isAuthenticated ? <PersonalChat /> : <Navigate to="/Login" />}
      />
      <Route
        path="/UserProfile"
        element={isAuthenticated ? <UserProfile /> : <Navigate to="/Login" />}
      />
      <Route
        path="/ContactsPage"
        element={isAuthenticated ? <ContactsPage /> : <Navigate to="/Login" />}
      />
    </Routes>
  );
};

export default UnAuthRoutes;
