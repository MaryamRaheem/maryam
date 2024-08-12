

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../Login';


const PrivateRoute = () => {
  const token = useSelector((state) => state.auth.token);

  return token ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoute;
