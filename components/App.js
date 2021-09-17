import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";


/* Importing CSS */
import "../assets/css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

/* Importing Pages */
import HomePage from '../pages/HomePage';
import ListingPage from '../pages/ListingPage';
import AdminPage from '../pages/AdminDashPage';
import LogInPage from '../pages/Log_InPage';
import SignUpPage from '../pages/Sign_UpPage';

const App = () => {
    return (

    <div className="container">
            
    <Router>
        <Switch>

            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/movies">
                <ListingPage/>
            </Route>

            <Route exact path="/tvShows">
                <ListingPage/>
            </Route>

            <Route exact path="/admin">
                <AdminPage/>
            </Route>

            <Route exact path="/logIn">
                <LogInPage/>
            </Route>

            <Route exact path="/signUp">
                <SignUpPage/>
            </Route>

        </Switch>
    </Router>

    </div>
  )
}

export default App;
