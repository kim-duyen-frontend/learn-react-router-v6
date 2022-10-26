import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouter() {
    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouter;