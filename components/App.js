import React from 'react';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
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

/* Importing Context */
import AllMoviesContext from '../context/AllMoviesContext.js';
import FTMoviesContext from '../context/FTMoviesContext.js';
import TVshowsContext from '../context/FTTVShowsContext.js';
import AllNewReleases from '../context/AllNewReleasesContext.js';
import AllTVShowsContext from '../context/AllTVShowsContext.js';
import UserContext from '../context/LogInContext.js';
import LocationContext from '../context/LocationContext.js';
import SearchContext from '../context/searchContext.js';
import SelectedContext from '../context/SelectedContext.js';

/* Import Data Access Object */
import RESTAPI from '../modules/DAO.js';

const App = () => {


    const [allMovies, setAllMovies] = useState([]); 
    const [allFTMovies, setAllFTMovies] = useState([]); 
    const [allFTTVshows, setAllFTTVshows] = useState([]); 
    const [allNewReleases, setAllNewReleases] = useState([]); 
    const [allTVShows, setAllTVShows] = useState([]); 
    const [user, setUser] = useState({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            })
    const [location, setRoute] = useState({location: ""});
    const [searchResults, setSearchResults] = useState([]);
    const [selected, setSelected] = useState([])


    useEffect(()=>{

        const fetchData = new RESTAPI();

        fetchData.getAPIData(`http://localhost:3500/movies/`, "GET")
        .then((data) => {

            setAllMovies(data.data)
        })

        fetchData.getAPIData(`http://localhost:3500/tvShows/`, "GET")
        .then((data) => {

            setAllTVShows(data.data)
        })

        fetchData.getAPIData(`http://localhost:3500/movies?featMovie=true`, "GET")
        .then((data) => {

            setAllFTMovies(data.data)
        })

        fetchData.getAPIData(`http://localhost:3500/tvShows?featTV=true`, "GET")
        .then((data) => {

            setAllFTTVshows(data.data)
        })

        fetchData.getAPIData(`http://localhost:3500/tvShows?featTV=true`, "GET")
        .then((data) => {

            setAllFTTVshows(data.data)
        })
        
        fetchData.getAPIData(`http://localhost:3500/movies?isNewMovie=y`, "GET")
        .then((data) => {

            setAllNewReleases(data.data)
        })

        .catch ((err)=>{

            console.log(err)
        })       
    
      },[]);

    return (
           
    <Router>
        <Switch>

            <AllMoviesContext.Provider value = {{allMovies, setAllMovies}}>
            <FTMoviesContext.Provider value = {{allFTMovies, setAllFTMovies}}> 
            <TVshowsContext.Provider value = {{allFTTVshows, setAllFTTVshows}}> 
            <AllNewReleases.Provider value = {{allNewReleases, setAllNewReleases}}>
            <AllTVShowsContext.Provider value = {{allTVShows, setAllTVShows}}>
            <UserContext.Provider value = {{user, setUser}}>
            <LocationContext.Provider value = {{location, setRoute}}>
            <SearchContext.Provider value = {{searchResults, setSearchResults}}> 
            <SelectedContext.Provider value = {{selected, setSelected}}>

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

                <Route exact path = "/login">
                    <LogInPage/>
                </Route>

                <Route exact path = "/register">
                    <SignUpPage/>
                </Route>

                <Route exact path = "/searchResults">
                    <SearchResultsPage/>
                </Route>
                

            </SelectedContext.Provider>
            </SearchContext.Provider>
            </LocationContext.Provider>
            </UserContext.Provider>
            </AllTVShowsContext.Provider>
            </AllNewReleases.Provider>
            </TVshowsContext.Provider>
            </FTMoviesContext.Provider>
            </AllMoviesContext.Provider>

        </Switch>
    </Router>


  )
}

export default App;
