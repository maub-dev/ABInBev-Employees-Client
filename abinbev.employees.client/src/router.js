import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Employees from './pages/Employees';
import NewEmployee from './pages/Employees/NewEmployee';
import EditEmployee from './pages/Employees/EditEmployee';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact Component={Login}></Route>
                <Route path='/Employees' exact Component={Employees}></Route>
                <Route path='/Employees/New' Component={NewEmployee}></Route>
                <Route path='/Employees/Edit' Component={EditEmployee}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;