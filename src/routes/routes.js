import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from "../Containers/Login";
import Register from "../Containers/Register";
import Home from '../Containers/Home'
import PrivateRoute from "./private-route";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoute exact component={Home} path="/" />
                
            </Switch>
        </Router>
    )
}

export default Routes