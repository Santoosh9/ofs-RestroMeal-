import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home/Home";
import Register from "./Components/Layout/Register";
import Login from "./Components/Layout/Login";

const Routes = () => { 
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                
            </Switch>
        </Router>
    )
}

export default Routes