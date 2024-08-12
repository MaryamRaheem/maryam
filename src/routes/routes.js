import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthRoutes from './AuthRoutes/AuthRoutes';
import UnAuthRoutes from './UnAuthRoutes/UnAuthRoutes';
import { useSelector } from 'react-redux';


const AppRoutes = () => {

    const [authuserdetail, setauthuserdetail] = useState(true)

    return (
        <>
            <Router>
                {authuserdetail ? (
                    <UnAuthRoutes />
                ) : (
                    <AuthRoutes />
                )}
            </Router>
        </>
    )
}

export default AppRoutes