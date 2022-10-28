import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


//Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPasword from "./pages/ForgotPasword";
import Dashboard from "./pages/Dashboard/";
import NotFound from "./pages/NotFound";
import VerifyEmail from "./pages/VerifyEmail";
import Cards from "./pages/Cards";
// import Charts from "./pages/Charts";
import Donations from "./pages/Donations";
import Profile from "./pages/Profile"
import Settings from "./pages/Settings";
import Users  from "./pages/Users";
import Contributors from "./pages/Users/contributors.js";
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPasword} />

            <Route path="/donations" component={Donations} />

            <Route path="/cards" component={Cards} />
            <Route path="/contibutors" component={Contributors} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" component={Users} />
            <Route path="/verify-email" component={VerifyEmail} />

            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
