import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouter({ isLogged }) {
    return isLogged ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouter;