import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Employee from './pages/Employee';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact Component={Login}></Route>
                <Route path='/Employee' Component={Employee}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;