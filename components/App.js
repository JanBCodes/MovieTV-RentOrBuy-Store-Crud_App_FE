import React from 'react';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

/* Importing CSS */
import "../assets/css/App.css";
import {} from  "../assets/css/PhoneMQ.css";
import {} from "../assets/css/TabletMQ.css";
import 'bootstrap/dist/css/bootstrap.min.css';

/* Importing Pages */
import HomePage from '../pages/HomePage';
import ListingPage from '../pages/ListingPage';
import AdminPage from '../pages/AdminDashPage';
import LogInPage from '../pages/Log_InPage';
import SignUpPage from '../pages/Sign_UpPage';
import AdminCreatePage from '../pages/Admin_CreateItem';
import SearchResultsPage from '../pages/SearchResultsPage';
import DetailsPage from '../pages/DetailsPage';
import AdminEditForm from './AdminEditForm';


/* Importing Context */
import UserContext from '../context/LogInContext.js';
import SearchContext from '../context/SearchContext.js';


const App = () => {

    const [user, setUser] = useState({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            })
    const [searchResults, setSearchResults] = useState([]);

    return (
           
    <Router>
        <Switch>

            <UserContext.Provider value = {{user, setUser}}>
            <SearchContext.Provider value = {{searchResults, setSearchResults}}> 

                <Route exact path = "/">
                    <HomePage/>
                </Route>

                <Route exact path = "/movies">
                    <ListingPage/>
                </Route>

                <Route exact path = "/movies/:id">
                    <DetailsPage/>
                </Route>

                <Route exact path = "/tvShows">
                    <ListingPage/>
                </Route>

                <Route exact path = "/tvShows/:id">
                    <DetailsPage/>
                </Route>
                
                <Route exact path = "/admin/dashBoard">
                    <AdminPage/>
                </Route>

                <Route exact path = "/admin/create">
                    <AdminCreatePage/>
                </Route>

                <Route exact path = "/admin/movies/:id">
                    <AdminEditForm/>
                </Route>

                <Route exact path = "/admin/tvShows/:id">
                    <AdminEditForm/>
                </Route>

                <Route exact path = "/admin/delete/:id">
                    <AdminEditForm/>
                </Route>

                <Route exact path = "/login">
                    <LogInPage/>
                </Route>

                <Route exact path = "/register">
                    <SignUpPage/>
                </Route>

                <Route exact path = "/searchResults">
                    <SearchResultsPage/>
                </Route>
                
            </SearchContext.Provider>
            </UserContext.Provider>


        </Switch>
    </Router>


  )
}

export default App;
