

/*!

=========================================================
*  Dashboard React - v1.1.0
=========================================================
*/
import React,{Fragment} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import AdminLayout from "../layouts/Admin.js";
import AuthLayout from "../layouts/Auth.js";

import Index from "../views/Index";



const AppRouter = () => (

    <Fragment>
        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Route path="/auth" render={props => <AuthLayout {...props} />} />
                <Redirect from="/" to="auth/login" />

                {/* <Redirect from="/" to="/admin/index" /> */}
            </Switch>
        </BrowserRouter>

    </Fragment>
);

export default AppRouter

