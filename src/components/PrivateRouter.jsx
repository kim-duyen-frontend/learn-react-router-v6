import React from 'react';
import { Outlet } from 'react-router-dom';
import Access from "../components/Access";

function PrivateRouter() {
    return localStorage.getItem("token") ? <Outlet /> : <Access/>
}

export default PrivateRouter;