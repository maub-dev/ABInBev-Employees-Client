import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Employees from './pages/Employees';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact Component={Login}></Route>
                <Route path='/Employees' Component={Employees}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;