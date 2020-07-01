import React from 'react';
import { HomeDefault, Login} from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';
import { Signup } from './pages/signup';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>
                <Route path="/login">
                    <Login />
                    
                </Route>
                <Route path="/signup">
                    <Signup />
                    
                </Route>
            </Switch>
        </Router>
    )
}

export default App;